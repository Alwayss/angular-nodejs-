app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/content");  //默认加载content.html页面

    $stateProvider
        .state("content", {
            url: "/content",
            templateUrl: "views/content.html"
        })
        //点击商品进入详情页
        .state("goodsDes", {
            url: "/goodsDes/:id",
            templateUrl: "views/ProductDetails.html"
        })
        //搜索
        .state("search", {
            url: "/search",
            templateUrl: "views/search.html"
        });
        //加入购物车
        //.state("addToCart", {
        //    url: "/addToCart",
        //    templateUrl: "views/ProductDetails.html", //购物车地址没换
        //    controller:function(JoincarService,$scope){
        //        JoincarService.addToCart(id).then(function(res){
        //            console.log(res);
        //            $scope.data=res;
        //        }, function (err) {
        //            alert(JSON.stringify(err));
        //        });
        //    }
        //})
        });
