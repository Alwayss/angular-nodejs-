

//控制器部分`
app.controller('Aaa',['$scope','$localStorage','$state',function ($scope,$localStorage,$state) {
    $scope.user=$localStorage.user;

    $scope.clearuser=function(){  //点击退出清除缓存
        delete $localStorage.user;
        $scope.user=$localStorage.user;
    };

    //判断是否已登录
    $scope.ifloginin=function(){
        if($scope.user!=''&& $scope.user!=undefined && $scope.user!=null){
            $state.go('app.shoppingcart')
        }else{alert("您还未登录"),$state.go('login')}
    };

}]);
app.controller('jumpCtrl',['$scope','HomeService',function ($scope,HomeService) {
    //给选项卡的click方法添加处理事件
    var data=function(){           //页面首次加载所触发的请求事件
        HomeService.firstGoods().then(function(res){
            console.log(res);
            $scope.arr=res;
        }, function (err) {
            alert(err.statusText);
        })
    };
    data();

    $scope.getData=function(type){       //给ng-click定义的事件
        HomeService.secondGoods(type).then(function(res){
            console.log(res);
            $scope.arr=res;
        }, function (err) {
            alert(err.statusText);
        })
    };

    $scope.change = function( reg , err ){
        for(var attr in err){
            if( err[attr] == true ){
                $scope[reg].regVal = attr;
                return;
            }
        }
        $scope[reg].regVal = 'pass';
    };

}]);



