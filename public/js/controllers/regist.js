var app = angular.module('myApp',['restangular','api.proxy','ui.router']);
app.controller('myController',['$scope','registerService','$state','$location',function ($scope,registerService,$state,$location) {

        $scope.user = {};
        $scope.show = function () {
            $scope.$watch('user.password', function () {
                $scope.test();
            });
            $scope.$watch('user.repeatePassword', function () {
                $scope.test();
            });
            $scope.test = function () {
                if ($scope.user.password !== $scope.user.repeatePassword) {
                    $scope.error = "两次密码输入不一致";
                    return false;
                } else {

                    return true;
                }
            };

        };
        $scope.show=function(){
            registerService.addusers({username:$scope.user.username,password:$scope.user.password}).then(function (res) {
                console.log("注册成功");
                alert("注册成功");
              // window.location.href("index.html");
              $state.go('content')

            }, function (err) {
                console.log("注册失败");
            })
        }

    }]
);