admin_app
    .run(
    [          '$rootScope', '$state', '$stateParams','$location',
        function ($rootScope, $state, $stateParams,$location) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
           // $location.path('/login');

        }])
            .config(function ($stateProvider, $urlRouterProvider) {
           $urlRouterProvider .when("", "/app/products");
           $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "content/login.html"
        })
         .state("app", {
                   abstract: true,
                   url: "/app",
                   templateUrl: "content/test.html"
               })

        .state("app.products", {
                   url: "/products",
                   templateUrl: "content/products.html"
               })

        .state("app.OperatingDate",{
            url:"/OperatingDate",
            templateUrl:"content/OperatingDate.html"
        })
        .state("app.InquiryMail",{
            url:"/InquiryMail",
            templateUrl:"content/InquiryMail.html"
        }


    )
});
