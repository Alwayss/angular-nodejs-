/**
 * Created by admin on 2015/9/25.
 */
//控制器部分
var app = angular.module('app',['restangular','api.proxy']);   //注入restangular模块

app
    .controller('denglCtrl',['$scope','LoginService',function ($scope,LoginService) {
    $scope.regText = {
        regVal : 'default',
        regList : [
            { name : 'default' , tips : ''},
            { name : 'required' , tips : '用户名不能为空'},
            { name : 'pattern' , tips : '用户名必须是有效字符'},
            { name : 'pass' , tips : ''}
        ]
    };
    $scope.regPassword = {
        regVal : 'default',
        regList : [
            { name : 'default' , tips : ''},
            { name : 'required' , tips : '密码不能为空'},
            { name : 'minlength' , tips : '密码至少6位'},
            { name : 'pass' , tips : ''}
        ]
    };


    $scope.login=function(){   //点击触发
        //alert($scope.regText.name'+'$scope.regPassword.name);
        LoginService.userLogin({username:$scope.regText.name,password:$scope.regPassword.name}).then(function (res) {
            /* res={
             message:'登录成功'
             }*/
            if(res=='OK'){
                //dsdsad

                alert('登陆成功');
            }else{
                alert(res.message);
            }
            //console.log(res.message);
        }, function (err) {
            alert(err.statusText);
        })
    }


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
