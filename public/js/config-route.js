app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/app/content");  //Ĭ�ϼ���app.htmlҳ��

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
        //�����Ʒ��������ҳ
        .state("app.goodsDes", {
            url: "/goodsDes/:id",
            templateUrl: "views/ProductDetails.html"
        })
        //����
        .state("app.search", {
            url: "/search",
            templateUrl: "views/search.html"
        })
        //��¼
        .state("login", {
            url: "/login",
            templateUrl: "views/login.html"
        })
        //ע��
        .state("reg", {
            url: "/reg",
            templateUrl: "views/regist.html"
        })
        //���ﳵ
        .state("app.shoppingcart", {
            url: "/shoppingcart",
            templateUrl: "views/shoppingcart.html"
        })

        .state("admin",{
            abstract: true,
            url: "/admin",
            templateUrl: "admin/index.html"
        })
});
