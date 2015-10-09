
app.controller("kindCtrl",function($scope){

});
app.controller("des",['$scope','GetidService','$stateParams',function($scope,GetidService,$stateParams){
    //alert($stateParams.id);
    console.log(typeof $stateParams.id);
    GetidService.productId($stateParams.id).then(function(res){
        $scope.data=res;
    }, function (err) {
        alert(JSON.stringify(err));
    });

//获取颜色规格
    $scope.getcolor=function(color){
        $scope.colors=color
    };
    $scope.getsta=function(sta){
        $scope.stas=sta
    };
    //加入购物车请求
    //$scope.getinfo=function(){   //点击触发
    //
    //    JoincarService.productInfo({gQuantity:1}).then(function (res) {
    //        console.log(res);
    //        $scope.data=res;
    //    }, function (err) {
    //       alert(err.statusText);
    //    })
    //};


}]);
