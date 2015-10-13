/**
 * Created by admin on 2015/9/25.
 */
app
    .controller('denglCtrl',['$scope','LoginService','$localStorage','$state',function ($scope,LoginService,$localStorage,$state) {
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

        $scope.user=$localStorage.user;
        console.log($scope.user);
    $scope.login=function(){   //点击触发
          LoginService.userLogin({username:$scope.regText.name,password:$scope.regPassword.name}).then(function (res) {
              var res=res;
              if(res.code == 200){
            //存储用户名
                $localStorage.user={id:res.result._id,name:res.result.username};
                alert('登陆成功');
                $state.go('app.content')
            }else{
                alert(res.message);
            }
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


}]);
