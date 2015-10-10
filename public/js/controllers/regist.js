app.controller('myController',['$scope','registerService','$state','$localStorage',function ($scope,registerService,$state,$localStorage) {

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
                alert("注册成功");
                $localStorage.user={name:$scope.user.username};
               //window.location.href = $location.protocol() + "://" + $location.host() + ":" + $location.port();
               $state.go('app.content')
            }, function (err) {
                console.log("注册失败");
            })
        }

    }]
);