angular.module('angularApp', [])

.controller('firstCtrl', function($scope) {
    $scope.helloWorld = function() {
        document.write('You just pressed the button.');
    };
});
