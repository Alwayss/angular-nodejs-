/**
 * Created by admin on 2015/9/22.
 */
app.directive('logo',function(){
    return{
        restrict:'AE',
        link:function(scope,ele,attrs){
            ele.bind('click',function($http){
                type=attrs.ds;
                scope.getData(type);    //调用控制器中的getData方法
            });
        }
    }
});
