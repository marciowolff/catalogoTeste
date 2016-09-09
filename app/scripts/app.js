/*global google*/

'use strict';

var app,
    services, util;

app = angular.module('catalogoApp', [
    'ngResource',
    'ngSanitize',
    'ngRoute',
    //'ngAnimate',
    //'ngCollection',
    //'ngStorage',
    //'angular-intro',
    //'ui.utils',
    //'ui.bootstrap',
    'catalogoApp.services',
    //'ngActivityIndicator',
    //'frapontillo.bootstrap-switch',
    //'ngActivityIndicator',
    //'angular-loading-bar',
    //'ui.tinymce'
]);
services = angular.module('catalogoApp.services', ['ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './views/main.html',
      controller: 'HomeController',
      requiresAuth: false,
      label: 'Redirect'
    }) 
    .when('/time/:time', {
      templateUrl: './views/detalhe-time.html',
      controller: 'DetalheController',
      requiresAuth: false,
      label: 'Redirect'
    })    
    .otherwise({
      templateUrl:'/404.html',
      requiresAuth: false,
      label: '404'
    });

    
}]);