/**
 * Created by chy on 2015/9/29.
 */
app.controller('Aaa',function($scope){
    $scope.search=function(){   //搜索
        if($scope.name=="小米"){
            window.open('views/search.html','_self');

        }
    }
})