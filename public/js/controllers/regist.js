var app = angular.module('myApp',['restangular','api.proxy']);
app.controller('myController',['$scope','registerService', function ($scope,registerService) {

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
        $scope.show=function(){
            registerService.addusers({username:$scope.user.username,password:$scope.user.password}).then(function (res) {
                console.log("注册成功");
            }, function (err) {
                console.log("注册失败");
            })
        }

    }]
)

/*

app .factory('UnitService', ['Restangular', function (Restangular) {
    var unitAngular = Restangular.withConfig(function (Configurer) {
        //服务个性化配置
    });
    var unitService = unitAngular.all('/userReg');
    return{
        addusers:function (user) {
            return unitService.customPOST(user);
        }
    }
}])
app.controller('myController', ['$scope', 'UnitService',function ($scope, UnitService) {
    $scope.add=function(){
        UnitService.addusers({username:$scope.user.username,password:$scope.user.password}).then(function (res) {
            console.log("注册成功");
        }, function (err) {
            console.log("注册失败");
        })}
}

])
*/
