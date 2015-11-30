'use strict';
zooApp.directive('animalcages', [function() {
    return {
        restrict: 'E',
        templateUrl: '/views/animalCages.html'
    };
}]);

zooApp.directive('cage', [function() {

    return {
    	scope: {
    		kindAnimal: "="	
    	},	
        restrict: 'E',
        templateUrl: '/views/cage.html',
        controller: function($scope, $element){
      		console.log($scope.kindAnimal)

      		$scope.getTitle = function(){
      			service.getAllAnimalsOfKind($scope.kindAnimal)[0].getAnimalKind("str")
      		}
    	}
  
    };
}]);
