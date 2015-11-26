'use strict';

/**
 * @ngdoc overview
 * @name zooApp
 * @description
 * # zooApp
 *
 * Main module of the application.
 */

var zooApp = angular
  .module('zooApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'

  ]);
  zooApp.config(function ($routeProvider) {
    $routeProvider
   
  });
