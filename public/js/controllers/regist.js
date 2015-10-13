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
                if(res.code == 200) {
                    //存储用户信息
                    $localStorage.user = {id: res.result._id, name: res.result.username};
                    alert('注册成功');
                    $state.go('app.content');
                    //window.location.href = $location.protocol() + "://" + $location.host() + ":" + $location.port();
                }else{
                    alert(res.message);
                }
            }, function (err) {
                console.log("注册失败");
            })
        }

    }]
);