angular.module('bolos', ['ngAnimate', 'ngRoute'])
.config(function($routeProvider) {

    $routeProvider.when('/produtos', {
        templateUrl: 'produtos.html',
        controller: 'MainController'
    });

    $routeProvider.when('/doces', {
        templateUrl: 'doces.html',
        controller: 'MainController'
    });

    $routeProvider.when('/toposDeBolo', {
        templateUrl: 'toposDeBolo.html',
        controller: 'MainController'
    });

    $routeProvider.when('/home', {
        templateUrl: 'home.html',
        controller: 'MainController'
    });

    $routeProvider.when('/promocoes', {
        templateUrl: 'promocoes.html',
        controller: 'MainController'
    });

    $routeProvider.when('/contato', {
        templateUrl: 'contatosDaMarga.html',
        controller: 'MainController'
    });
});