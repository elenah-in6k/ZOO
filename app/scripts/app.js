'use strict';
/**
 * @ngdoc overview
 * @name zooApp
 * @description
 * # zooApp
 *
 * Main module of the application.
 */
var zooApp = angular.module('zooApp', [
  'ngAnimate', 
  'ngAria', 
  'ngCookies', 
  'ngMessages', 
  'ngResource', 
  'ngRoute', 
  'ngSanitize', 
  'ngTouch'
  ]);
zooApp.factory('zoo', function() {
    return new AnimalFiller();
});


var giveVoiceInChat = giveVoiceInChat;
zooApp.controller('zooCtrl', ['$scope', 'zoo' ,'$interval', function($scope, zoo, $interval) {
    $scope.service = zoo.getZooAnimals();
    $scope.service.startAllTimer();
    $interval(function() { console.log('interval')}, 1000);
    $scope.kill = function(animal) {
        $scope.service.killAnimal(animal);
    };
    $scope.addAnimal = function(animal) {
        $scope.service.addAnimal(
          window[animal.animalKind], 
          animal.name, 
          animal.givingTongueFrequency, 
          animal.feedingFrequency
          );
    };
    $scope.giveVoiceInChat = function(animal) {
        $scope.animal = animal;
        return "kjhkihj"
        ;
    };
}]);
zooApp.config(function($routeProvider) {
    $routeProvider
});