'use strict';
zooApp.directive('animalcages', [function() {
    return {
        restrict: 'E',
        templateUrl: '/views/animalCages.html'
    };
}]);

zooApp.directive('cage', [function() {
    return {
    	kindAnimal: "Cage",
        restrict: 'E',
        templateUrl: '/views/cage.html'
    };
}]);
