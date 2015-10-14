/**
 * Created by admin on 2015/9/29.
 */

app.controller('gwaa',['$scope','SendidService','$localStorage','JoincarService','ReduceService',function ($scope,SendidService,$localStorage,JoincarService,ReduceService) {
    var initCart=function(){
        var uid=$localStorage.user.id;
        SendidService.userId(uid).then(function(res){
            if(res.code==200){
                //console.log(res.result);
                $scope.cartArr=res.result;//变量存储返回的数组
                //单件商品的总价
                 $scope.zprice=function(index)
                {
                    return $scope.cartArr[index].gPrice * $scope.cartArr[index].gQuantity;
                };
                //所有商品总价
                $scope.Array=[];   //存储每件商品的总价
                $scope.count=0;     //存储应付的总价
                (function(){
                    for(var i=0;i<$scope.cartArr.length;i++){
                        $scope.Array.push($scope.cartArr[i].gPrice*$scope.cartArr[i].gQuantity);
                   }
                    for(var i=0;i<$scope.Array.length;i++){
                        $scope.count+=$scope.Array[i];
                    }
                    return $scope.count;
                })();
            }
        }, function (err) {
            alert("失败");
        });
    };
    initCart();
//商品增加
    $scope.add=function(index) {
        $scope.cartArr[index].gQuantity++;
        $scope.count = parseInt($scope.count) + parseInt($scope.cartArr[index].gPrice);

        $scope.user=$localStorage.user;
        $scope.getinfo=function(gid){
            if($scope.user!='' && $scope.user!=undefined && $scope.user!=null){
                console.log($scope.user.name);
                //登录之后将商品信息传入购物车
                var uid=$localStorage.user.id; //获取用户id
                JoincarService.productInfo({uid:uid,gid:gid}).then(function (res) {
                    console.log(res);
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
    };
//商品减少
    $scope.minus=function(index){
        if($scope.cartArr[index].gQuantity==0){return false;}
        else{
        $scope.cartArr[index].gQuantity--;
        $scope.count=parseInt($scope.count)-parseInt($scope.cartArr[index].gPrice);

            $scope.user=$localStorage.user;
            $scope.getinfo=function(gid){
                if($scope.user!='' && $scope.user!=undefined && $scope.user!=null){
                    console.log($scope.user.name);
                    //登录之后将商品信息传入购物车
                    var uid=$localStorage.user.id; //获取用户id
                    ReduceService.reduce({uid:uid,gid:gid}).then(function (res) {
                        console.log(res);
                        if(res.code==200){
                            console.log('success');
                        }else{}
                    }, function (err) {
                        alert(err.statusText);
                    });
                }else{
                    alert("您还未登录");
                    $state.go('login')
                }
            };
        }
    }
}]);
//
/**
 * Created by admin on 2015/10/10.
 */
