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

function giveVoice22($scope) {
    $scope.giveVoice22(animal)
};
zooApp.controller('zooCtrl', ['$scope', 'zoo', function($scope, zoo) {
    $scope.service = zoo.getZooAnimals();
    $scope.kill = function(animal) {
        $scope.service.killAnimal(animal);
        $scope.apply();
    };
    $scope.addAnimal = function(animal) {
        $scope.service.addAnimal(window[animal.animalKind], animal.name, animal.givingTongueFrequency, animal.feedingFrequency);
        $scope.apply();
    };
    $scope.giveVoice22 = function(animal) {
        $scope.animal = animal;
        return
        document.appendChild(document.createElement("chatReplica"));
    };
}]);
zooApp.config(function($routeProvider) {
    $routeProvider
});