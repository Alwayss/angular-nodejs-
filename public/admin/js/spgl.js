admin_app.directive('fileupload', function() {
    return {
        restrict:'A',
        scope: {
            done: '&',
            progress: '&'
        },
        link: function(scope, element, attrs) {
            var optionsObj = {
                dataType: 'json'
            };
            if(scope.done) {
                optionsObj.done = function(e, data) {
                    scope.$apply(function() {
                        scope.done({e: e, data: data});
                    });
                };
            }
            if(scope.progress) {
                optionsObj.progress = function(e, data) {
                    scope.$apply(function() {
                        scope.progress({e: e, data: data});
                    });
                };
            }
//以上内容可以简单地在一个循环中完成，这里是为了覆盖Fileupload控件所提供的API
            element.fileupload(optionsObj);
        }
    };
});


admin_app.controller('spgld', ['$scope', 'GoodsService', 'AddService', 'DeleteService','$localStorage','$http','$state', function ($scope, GoodsService, AddService, DeleteService,$localStorage,$http,$state) {
    if($localStorage.user=='' ||$localStorage.user==undefined||$localStorage.user==null ){
        $state.go('login');
    }
    else{
    $scope.page = 1;
    $scope.productSearch='';
    $scope.initData = function () {
        GoodsService.getgoods($scope.page).then(function (res) {
            //console.log(res.result);
            $scope.phone = res.result;

            $scope.count = res.count; //数据总条数
            $scope.total = Math.ceil($scope.count / 6);

        }, function (err) {

        });
    }

    $scope.initData();
    /*上传图片功能*/


    /*添加功能*/
    var file=document.getElementById('testUpload');
    $scope.submit1 = function () {
        var str=file.value;
        $scope.pImg='images/'+str.slice(str.lastIndexOf('\\')+1);
        var product={
            gName:$scope.pName,
            gPrice: $scope.pPrice,
            gImg:$scope.pImg,
            gDescription: $scope.pDescription,
            gCategory: $scope.pCategory,
            gSum: $scope.pSum
        };
        alert(JSON.stringify(product));
        AddService.addgoods(product).then(function (res) {
            console.log("添加成功");
            alert("恭喜您，成功添加商品")
            $scope.pName= $scope.pPrice=$scope.pDescription=$scope.pCategory= $scope.pSum=null;
        }, function (err) {
            console.log("添加失败");
        });
    }
    /* 删除功能*/
    $scope.product_delete = function () {
/**/
        var arr = new Array();
        var arr_name=new Array();
        for (var i = 0; i < $scope.phone.length; i++) {
            //alert(i + "#"+ $scope.phone[i].check);
            if ($scope.phone[i].check) {
                arr.push($scope.phone[i]._id);
                arr_name.push($scope.phone[i].gName);
            }
        }
      if(arr_name.length==0){
          alert("请选择要删除的商品");
      }else{
        if(confirm("确定要删除"+arr_name+"?")){
        DeleteService.deletegoods({list: arr}).then(function (res) {
            console.log("删除成功");
            if (res.code == 200) {
                $scope.initData();
            }
        }, function (err) {
            console.log(err);
        })}}

    }
    /*上一页功能*/
    $scope.up = function () {
        if ($scope.page >= 2) {
            $scope.page--;
            GoodsService.getgoods($scope.page).then(function (res) {
                    //console.log(res.result);
                    $scope.phone = res.result;

                    $scope.count = res.count; //数据总条数
                }, function (err) {

                }
            )
        }
    }
    /*下一页功能*/
    $scope.down = function () {
        if ($scope.page < $scope.total) {
            $scope.page++;

            GoodsService.getgoods($scope.page).then(function (res) {
                //console.log(res.result);
                $scope.phone = res.result;
            }, function (err) {

            })
        }
    }
    $scope.uploadFinished = function(e, data) {
        console.log('We just finished uploading this baby...');
    };
    $scope.uploading = function(e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        console.log(progress + '%');
    };

}


}
]);
