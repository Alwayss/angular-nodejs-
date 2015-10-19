/**
 * Created by chy on 2015/10/9.
 */
angular.module('api.proxy', ['restangular'])
    .factory('LoginService', ['Restangular', function (Restangular) {
        var loginAngular = Restangular.withConfig(function (Configurer) {

        });
        var loginService = loginAngular.all('/adminLogin');

        return {
            userLogin: function (uers) {
                return loginService.customPOST(uers);
            }
        }
    }])

    .factory('GoodsService', ['Restangular', function (Restangular) {
        var unitAngular = Restangular.withConfig(function (Configurer) {
            //服务个性化配置
        });
        var unitService = unitAngular.all('/goods');
        return{
            getgoods: function (pageid) {
                return unitService.customGET('paged/' + pageid);
            }
        }
    }])
    .factory('AddService', ['Restangular', function (Restangular) {
        var unitAngular = Restangular.withConfig(function (Configurer) {
            //服务个性化配置
        });
        var unitService = unitAngular.all('/goodsAdd');
        return{
            addgoods: function (product) {
                return unitService.customPOST(product)
            }
        }
    }])

    .factory('DeleteService', ['Restangular', function (Restangular) {
        var unitAngular = Restangular.withConfig(function (Configurer) {
            //服务个性化配置
        });
        var unitService = unitAngular.all('/goodsDel');
        return{
            deletegoods: function (list) {
                return unitService.customPOST(list);
            }
        }


    }])
    .factory('UploadService', ['Restangular', function (Restangular) {
        var UploadAngular = Restangular.withConfig(function (Configurer) {

        });
        var UploadService = UploadAngular.all('/upload');

        return {
            upload: function () {
                return loginService.customPOST();
            }
        }
    }])
