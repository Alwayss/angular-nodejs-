app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/content");  //Ĭ�ϼ���content.htmlҳ��

    $stateProvider
        .state("content", {
            url: "/content",
            templateUrl: "views/content.html"
        })
        //�����Ʒ��������ҳ
        .state("goodsDes", {
            url: "/goodsDes/:id",
            templateUrl: "views/ProductDetails.html"
        })
        //����
        .state("search", {
            url: "/search",
            templateUrl: "views/search.html"
        });
        //���빺�ﳵ
        //.state("addToCart", {
        //    url: "/addToCart",
        //    templateUrl: "views/ProductDetails.html", //���ﳵ��ַû��
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
