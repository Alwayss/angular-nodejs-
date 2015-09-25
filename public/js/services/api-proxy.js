/**
 * Created by admin on 2015/9/22.
 */
angular.module('api.proxy',['restangular'])
    .factory('HomeService',['Restangular',function(Restangular){// 现在我们已经在LoginService中访问了Restangular
        var homeAngular = Restangular.withConfig(function (Configurer) {
            //服务配置

        });
        var firstService=homeAngular.all('/goods'); //请求路径
        var secondService=homeAngular.all('/goods');
        return {
            firstGoods: function () {            //定义请求方法
                return firstService.customGETLIST('米');    
            },
            secondGoods:function(type){
                return secondService.customGETLIST(type);
            }

        }
    }]);
    /*var type='';
    var timer = null;
    $scope.data = [];
    $scope.change = function(name){
        $timeout.cancel(timer);
        timer = $timeout(function(){

            $http({
                method : 'JSONP',
                url : 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+name+'&cb=JSON_CALLBACK'
            }).success(function(data){
                //console.log(data);
                $scope.data = data.s;
            });
        },500);
    };
    $scope.arr=[];*/
    //默认加载第一个选项的内容
    /*$http({
        method:'GET',
        url:'/goods?goodsname=米'
    }).success(function(data){
        $scope.arr=data;
    });*/

