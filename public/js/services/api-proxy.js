/**
 * Created by admin on 2015/9/22.
 */
app.controller('Aaa',['$scope','$http','$timeout',function($scope,$http,$timeout){
    var type='';
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
    $scope.arr=[];
    //默认加载第一个选项的内容
    $http({
        method:'GET',
        url:'/goods?goodsname=米'
    }).success(function(data){
        $scope.arr=data;
    });
    //给选项卡的click方法添加处理事件
    $scope.getData=function(type){
        $http({
            method:'GET',
            url:'/goods?goodsname='+type
        }).success(function(data){
            $scope.arr=data;
        });
    }
}]);
