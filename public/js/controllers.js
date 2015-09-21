/**
 * Created by admin on 2015/9/18.
 */
var app=angular.module("myApp",[]);
//限时抢购
app.controller("phoneCtrl",function($scope){
    $scope.goods=[
        {gName:'Apple iphone6(16G)(银)',gPrice:'4288.00',gImg:'images/phone1_10.jpg'},
        {gName:'Apple iphone6(16G)(金)',gPrice:'4188.00',gImg:'images/phone2_16.jpg'},
        {gName:'Apple iphone6(16G)(金)',gPrice:'4188.00',gImg:'images/phone3_13.jpg'},
        {gName:'Apple iphone6(16G)(金)',gPrice:'4188.00',gImg:'images/phone3_13.jpg'},
        {gName:'Apple iphone6(16G)(金)',gPrice:'4188.00',gImg:'images/phone3_13.jpg'}
    ]
});
//侧边栏
app.controller("kindCtrl",function($scope){
    $scope.phone=[
        {gName:'三星手机',gName1:'Galaxy'},
        {gName:'苹果手机',gName1:'iphone5s'},
        {gName:'小米手机',gName1:'小米2s'},
        {gName:'三星手机'},{gName:'三星手机'},
        {gName:'其他电子产品',gName1:'U盘'}
    ]
});
//搜索
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
app.directive('logo',function(){
    return{
        restrict:'AE',
        link:function(scope,ele,attrs){
            ele.bind('click',function($http){
                type=attrs.ds;
                scope.getData(type);    //调用控制器中的getData方法
            });
        }
    }
});
//品牌特卖

