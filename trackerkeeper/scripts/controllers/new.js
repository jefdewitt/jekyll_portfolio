'use strict';

angular.module('angularApp')

.controller('newCtlr', function($scope, $location, $localStorage, goalToBeTracked) {
    $scope.message = 'Look! I am a new page.';

    $scope.go = function ( path ) {
        $location.path( path );
    }

    // we hook into our shared object from our service/factory
    $scope.New = goalToBeTracked;

    // we create a new project object constructor
    function Goal(name, hours) {
        this.name = name;
        this.hours = hours;
        this.timeRepo = [];
        this.selected = false;
    }

    $scope.$storage = $localStorage;

    if ($localStorage.project === undefined) {
        $localStorage.project = [];
    }

    $scope.saveGoal = function(){

        var count = 0;

        // create a new instance of our project object and store values from
        // the input fields on the front-end of the app
        var newGoal = new Goal( $scope.formObject.name, $scope.formObject.hours );
        newGoal.selected = true;

        // error handling in the event of an empty storage array.
        // this is particularly useful on mobile where it seems JS
        // interpretation is stricter.
        if ( $scope.$storage.project.length > 0 ) {

            // check to see if we have a unique track name
            angular.forEach($scope.$storage.project, function(index) {

                count++;

                if ( index.name === newGoal.name ) {

                    alert('A track by that name already exists. Please choose a different name.')
                    $scope.formObject.name = '';

                } else if ( index.name != newGoal.name && count === $scope.$storage.project.length ) {

                    $scope.$storage.project.push(newGoal);

                    // we match the props of our shared object with project object
                    $scope.New.name = newGoal.name;
                    $scope.New.hours = newGoal.hours;
                    $scope.New.timeRepo = [];

                    if ( index.name === $scope.New.name ) {
                        index.selected = true;
                    } else {
                        index.selected = false;
                    }

                    // we set our localStorage object to match our $scope.$storage object
                    $localStorage.project = $scope.$storage.project;

                    // here we clear the form
                    $scope.formObject = {
                        name: '',
                        time: ''
                    }

                    $scope.go('project-input-view');
                }
            })

        } else {

            // create a new instance of our project object and store values from
            // the input fields on the front-end of the app
//             var newGoal = new Goal( $scope.formObject.name, $scope.formObject.hours );
//             newGoal.selected = true;
            $scope.$storage.project.push(newGoal);

            // we match the props of our shared object with project object
            $scope.New.name = newGoal.name;
            $scope.New.hours = newGoal.hours;
            $scope.New.timeRepo = [];

            // we set our localStorage object to match our $scope.$storage object
            $localStorage.project = $scope.$storage.project;

            // here we clear the form
            $scope.formObject = {
                name: '',
                time: ''
            }

            $scope.go('project-input-view');
        }
    }
});
