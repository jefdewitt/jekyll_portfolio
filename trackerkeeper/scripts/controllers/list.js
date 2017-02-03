'use strict';

angular.module('angularApp')

.controller('listCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, $filter, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.ListItem = goalToBeTracked;

    $scope.pctgCompleted = function(project) {

        this.goalTimeInMin = project.hours * 60;

        this.arrayMinutes = project.timeRepo.map(function(object) {
            return object.minutes;
        });

        this.sumOfEntries = this.arrayMinutes.reduce(function(a, b) {
            return a + b;
        }, 0);

        this.totalAccumulatedHours = this.sumOfEntries / 60;

        this.totalAccumulatedPctg = ( this.sumOfEntries * 100 ) / this.goalTimeInMin;

        return this.totalAccumulatedPctg.toFixed(2);
    }

    $scope.$storage = $localStorage;

    $scope.projectObject = $scope.$storage.project;

    $scope.loadData = function(project) {
        $scope.ListItem.name = project.name;
        $scope.ListItem.hours = project.hours;
        $scope.ListItem.timeRepo = project.timeRepo;

        angular.forEach($scope.$storage.project, function(index) {
            if ( index.name === $scope.ListItem.name ) {
                index.selected = true;
            } else {
                index.selected = false;
            }
        })
    }

    var count = 0;
    var myEl = angular.element( document.querySelectorAll( 'li' ) );

    $scope.removeData = function() {

        if (count < 1) {
            var myEl = angular.element( document.querySelectorAll( 'li' ) );
            myEl.addClass('slide');
        }
        count++;
    }

    $scope.restoreCount = function() {
        angular.element( document.querySelectorAll( 'li' ) ).removeClass('slide');
        count = 0;
    }

    $scope.deleteTrack = function(project) {
        if (confirm('Are you sure you want to delete this track? All data will be lost.')) {

            var count = 0;
            angular.forEach($scope.projectObject, function(index) {

                if (project.name != index.name) {
                    count++
                } else {
                    // we find the index of the items that match by counting the number of times
                    // we loop thru the array until we find a match.
                    var match = count;
                    $scope.projectObject.splice( match, 1 );
                }
            })

            count = 0;

        }
    }

});
