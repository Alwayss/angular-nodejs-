
app.controller("kindCtrl",function($scope){

});
app.controller("des",['$scope','GetidService','$stateParams','$state','JoincarService','$localStorage',function($scope,GetidService,$stateParams,$state,JoincarService,$localStorage){
 //获取商品id
    GetidService.productId($localStorage.id).then(function(res){
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
//加入购物车
    $scope.user=$localStorage.user;
    $scope.getinfo=function(gid){
        if($scope.user!='' && $scope.user!=undefined && $scope.user!=null){
           //console.log($scope.user.name);
            //登录之后将商品信息传入购物车
            var uid=$localStorage.user.id; //获取用户id
            //console.log(gid);
            JoincarService.productInfo({uid:uid,gid:gid}).then(function (res) {
                    //console.log(res);
                   if(res=='OK'){
                       console.log('success');
                   }else{

                   }
            }, function (err) {
                alert(err.statusText);
            });
        }else{
            alert("您还未登录");
            $state.go('login')
        }
    };

}]);