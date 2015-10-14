app.directive('add',function($localStorage){
    return{
        restrict:'AE',
        link:function(scope,ele,attrs){
            ele.bind('click',function($http){
                gid=attrs.ac;
                //uid=$localStorage.user.id;
                scope.getinfo(gid);    //调用控制器中的getinfo方法
            });
        }
    }
});/**
 * Created by admin on 2015/10/12.
 */
