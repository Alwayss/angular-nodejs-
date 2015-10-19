/**
 * Created by chy on 2015/10/9.
 */
admin_app
    .controller('denglCtrl',['$scope','LoginService','$http','$state','$localStorage',function ($scope,LoginService,$http,$state,$localStorage) {
        $scope.AdminLogin=function(){   //点击触发
            LoginService.userLogin({username:$scope.admin.username,password:$scope.admin.pwd}).then(function (res) {
                if(res.code==200){

                    $state.go('app.products');
                    $localStorage.user={
                        username:$scope.admin.username
                    }

                }else{

                    $scope.authError = '用户名密码错误';
                    //$state.go('app.products');

                }

            }, function (err) {
                alert(err.statusText);
                $scope.url="http://www.baidu.com";
              /*  self.location='index.html';*/
            })
        }}])
