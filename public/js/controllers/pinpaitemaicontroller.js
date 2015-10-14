

//控制器部分`
app.controller('Aaa',['$scope','$localStorage','$state','$rootScope','SearchService',function ($scope,$localStorage,$state,$rootScope,SearchService) {
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
   //点击搜索
   $scope.searchpage=function(){
        SearchService.search($scope.name).then(function(res){
            if(res.code==200){
                $state.go('app.search');
                $rootScope.productArr=res.result;//用变量存储返回的数组
            }
        }, function (err) {
            alert("失败");
        });
    };

}]);
app.controller('jumpCtrl',['$scope','HomeService',function ($scope,HomeService) {
    //给选项卡的click方法添加处理事件
    var data=function(){           //页面首次加载所触发的请求事件
        HomeService.firstGoods().then(function(res){
            if(res.code==200){
                $scope.arr=res.result;//用变量存储返回的数组
            }
        }, function (err) {
            alert(err.statusText);
        })
    };
    data();

    $scope.getData=function(type){       //给ng-click定义的事件
        HomeService.secondGoods(type).then(function(res){
            if(res.code==200){
                $scope.arr=res.result;//用变量存储返回的数组
            }
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



