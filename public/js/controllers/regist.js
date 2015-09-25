var app = angular.module('myApp',[]);
app.controller('myController', function ($scope) {

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

        }

    }
)