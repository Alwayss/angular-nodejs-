/**
 * Created by admin on 2015/9/29.
 */

app.controller('gwaa',['$scope',function ($scope) {
    $scope.iphone = {
        halo:"魅族MX5（M575)16GB银黑色移动联通4G手机",
        hedl:"现货",
        money : 2100,
        num : 1,
        fre : 0
    };
    $scope.iphonea = {
        halo:"魅族MX5（M575)16GB银黑色移动联通4G手机",
        hedl:"现货",
        money : 3125,
        numa:1
    };

    $scope.sum = function(){
        return $scope.iphone.money * $scope.iphone.num;
    };
    $scope.suma = function(){
        return $scope.iphonea.money * $scope.iphonea.numa;
    };
    var num = 1;
    var numa= 1;
    $scope.wgjia = function () {
        if(num==1){
            num=1;
        }
        else{
            num -= 1;
            $scope.iphone.num= num;
        }
        $scope.hg();
    }
    $scope.wgjian = function (){
        num += 1;
        $scope.iphone.num= num;
        $scope.hg();
    };
    $scope.wgjiaa = function () {
        if(numa==1){
            numa=1;
        }
        else{
            numa -= 1;
            $scope.iphonea.numa= numa;
        }
        $scope.hg();
    }
    $scope.wgjiana = function (){
        numa += 1;
        $scope.iphonea.numa= numa;
        $scope.hg();
    };


    $scope.oput=function(){
        if(document.getElementById('opur').checked==true){
            document.getElementById('haoi').checked=true;
            document.getElementById('haoii').checked=true;
        }else{
            document.getElementById('haoi').checked=false;
            document.getElementById('haoii').checked=false;
        }

        if($scope.ss== 0){
            $scope.hh = 1;
            $scope.gg = 1;
        }else{
            $scope.hh = 0;
            $scope.gg = 0;
        }
        $scope.change();
    };

    $scope.spje=function(){
        return  $scope.suma() + $scope.sum()
    };
    $scope.$watch($scope.spje,function(newVal){
        $scope.iphone.fre = newVal >= 10000 ? 0 : 20;
    });

    $scope.zgje=function(){
        return  $scope.spje() + $scope.iphone.fre
    };
    $scope.ss = 0;
    $scope.hh = 0;
    $scope.gg = 0;
    $scope.zz = 0;
    $scope.zhg = 0;
    $scope.zhggg = 0;
    $scope.change = function () {
        $scope.zz = parseInt($scope.hh)+parseInt($scope.gg);
        $scope.hg = function () {
            if($scope.hh == 1){
                $scope.z = $scope.sum();
            }
            else{
                $scope.z = 0;
            }
            if($scope.gg == 1){
                $scope.h = $scope.suma();
            }else{
                $scope.h = 0;
            }
            $scope.zhg = $scope.z+$scope.h;
            $scope.zhggg = $scope.zhg + $scope.iphone.fre;
        };
        $scope.hg();
    }
}]);

/**
 * Created by admin on 2015/10/10.
 */
