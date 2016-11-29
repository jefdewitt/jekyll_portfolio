angular.module('angularApp', []).config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
})

.controller('firstCtrl', function($scope, $parse) {
    $scope.helloWorld = function() {
        console.log('You just pressed the button.');
    };
});
