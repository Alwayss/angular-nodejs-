/**
 * Created by admin on 2015/9/18.
 */
//var app=angular.module("myApp",['ngRoute','restangular','api-proxy']);

//控制器部分`
app.controller('Aaa',['$scope',function ($scope) {

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

    /*$scope.yy = function () {
     if(document.getElementById('in1').value == 'yanyan123' &&document.getElementById('in2').value == '123yanyan'){
     window.open('http://www.baidu.com','_self');
     }
     else{
     alert('账号或密码不正确')
     }
     }*/
}]);



