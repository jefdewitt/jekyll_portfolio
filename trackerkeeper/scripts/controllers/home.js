'use strict';

angular.module('angularApp')

// create the controller and inject Angular's $scope
.controller('homeCtlr', function($scope, $location, $localStorage, goalToBeTracked) {
    // create a message to display in our view
    // $scope.message = 'Everyone come and see how good I look!';

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Home = goalToBeTracked;

    $scope.$storage = $localStorage.project;
    console.log('Heres our scope.storage contents');
    angular.forEach($scope.$storage, function(index) {
        console.dir(index.name);
    });

});
