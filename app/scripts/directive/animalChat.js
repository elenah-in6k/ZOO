'use strict';
zooApp.directive('animalchat', [function() {
    return {
        restrict: 'E',
        templateUrl: '/views/animalChat.html'
    };
}]);

zooApp.directive('chatreplica', [function() {
    return {
        restrict: 'E',
        templateUrl: '/views/chatReplica.html'
    };
}]);