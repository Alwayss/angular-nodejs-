app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/app/content");  //默认加载app.html页面

    $stateProvider

        .state("app", {
            abstract: true,
            url: "/app",
            templateUrl: "views/app.html"
        })
        .state('app.content', {
            url: '/content',
            templateUrl: 'views/content.html'
        })
        //点击商品进入详情页
        .state("app.goodsDes", {
            url: "/goodsDes/:id",
            templateUrl: "views/ProductDetails.html"
        })
        //搜索
        .state("app.search", {
            url: "/search",
            templateUrl: "views/search.html"
        })
        //登录
        .state("login", {
            url: "/login",
            templateUrl: "views/login.html"
        })
        //注册
        .state("reg", {
            url: "/reg",
            templateUrl: "views/regist.html"
        })
        //购物车
        .state("app.shoppingcart", {
            url: "/shoppingcart",
            templateUrl: "views/shoppingcart.html"
        })
        ;
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
