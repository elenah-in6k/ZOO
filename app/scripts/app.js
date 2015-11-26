'use strict';
/**
 * @ngdoc overview
 * @name zooApp
 * @description
 * # zooApp
 *
 * Main module of the application.
 */
var zooApp = angular.module('zooApp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']);
zooApp.factory('zoo', function() {
    return new AnimalFiller();
});
zooApp.controller('zooCtrl', ['$scope', 'zoo', function($scope, zoo) {
    $scope.service = zoo.getZooAnimals();
    $scope.kill = function(animal) {
        $scope.service.killAnimal(animal);
        $scope.apply();
    };
    $scope.giveVoice = function(animal) {
      return animal.getAnimalKind("str") + " " +
    animal.getName() + " : " + animal.getVoice();
    };
    
}]);
zooApp.config(function($routeProvider) {
    $routeProvider
});