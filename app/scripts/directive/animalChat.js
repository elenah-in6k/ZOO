var zoo = angular
	.module('zoo', []);

	zoo.directive('animalChat', [function () {
		return {
			restrict: 'A',
			link: function (scope, iElement, iAttrs) {
				
			}
		};
	}])