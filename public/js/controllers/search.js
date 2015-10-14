/**
 * Created by chy on 2015/9/29.
 */
app.controller('Aaa',function($scope){
    SearchService.search().then(function(res){
        if(res.code==200){

        }else{

        }
    }, function (err) {
        alert("失败");
    });
});