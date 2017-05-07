'use strict';

angular.module('angularApp')

.controller('inputCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Input = goalToBeTracked;

    $scope.$storage = $localStorage;

    angular.forEach($scope.$storage.project, function(index) {
        if( index.selected === true ) {
            $scope.Input = index;
        } else {
            index.selected = false;
        }
    })

    angular.forEach($scope.Input.timeRepo, function(index) {
        if( index.edit === true) {
            $scope.timer = index.minutes;
            $scope.date = index.timeStamp;
        }
    })

    $scope.clearAll = function() {
        console.log('test');
        angular.forEach($scope.Input.timeRepo, function(index) {
            index.edit = false;
        });
        $scope.timer = '';
        $scope.date = '';
    }

    $scope.timeStamp = function() {
        var dateObj = new Date();
        var month = dateObj.getMonth() + 1; //months from 1-12
        if (month < 10) { month = '0' + month; }
        var day = dateObj.getDate();
        if (day < 10) { day = '0' + day; }
        var year = dateObj.getFullYear();

        $scope.timeStamp = year + "-" + month + "-" + day;
        return $scope.timeStamp;
    }

    $scope.saveNewData = function() {
        // grab the current interval timer value
        var currentTimerTime = $scope.timerWithInterval;
        // grab the manual time entered
        var manualTime = $scope.timer;
        // create a new time object to add to our timeRepo property
        $scope.newTime = {};

        // if diff date is selected add it to our new time object
        if ( $scope.date != undefined ) {
            $scope.newTime.timeStamp = $scope.date;
        } else {
            // otherwise get today's date & add it to our new time object
            $scope.newTime.timeStamp = $scope.timeStamp();
        }

        // Storage function
        var storeData = function() {
            angular.forEach($scope.$storage.project, function(index) {
                if (index.name === $scope.Input.name) {
                    index.timeRepo.push($scope.newTime);
                    index.selected = true;
                    $scope.Input.timeRepo = index.timeRepo;
                } else {
                    console.log('no match');
                }
            })

            var newArray = $scope.Input.timeRepo.slice();
            newArray.pop();

            var count = 0;
            angular.forEach(newArray, function(index) {
                // If timeStamps don't match, do nothing, the object's minutes will be added
                if( $scope.Input.timeRepo.slice(-1)[0].timeStamp != index.timeStamp ){
                    count++;
                // If the time was clicked on from the calendar, the minutes will be overwritten
                } else if ( index.edit ){
                    index.minutes = $scope.timer;
                    $scope.clearAll();
                    // Else if they objects are made the same day and the object was not selected
                    // to edit from the calendar then combine the minutes property
                } else {
                    index.timeStamp = $scope.Input.timeRepo.slice(-1)[0].timeStamp;
                    index.minutes = $scope.Input.timeRepo.slice(-1)[0].minutes + index.minutes;
                }
            })
            if ( count < newArray.length ) {
                $scope.Input.timeRepo.pop();
            }
            count = 0;
        }

        if ( currentTimerTime > 0 ) {
            // store the actual object properties in the timeRepo array
            $scope.newTime.minutes = Math.ceil($scope.timerWithInterval / 60);

            storeData();

            $scope.timerWithInterval = '';

        } else {
            // store the actual object properties in the array item object
            $scope.newTime.minutes = $scope.timer;

            storeData();

            $scope.timer = '';
        }

        // we set our localStorage object to match our $scope.$storage object
        $localStorage.project = $scope.$storage.project;
    }


    // Stopwatch feature

    // store the interval promise in this variable
    var promise;

    // timer with interval
    $scope.timerWithInterval = 0;
    $scope.startTimerWithInterval = function() {
        $scope.timerWithInterval = 0;
        if($scope.myInterval){
            $interval.cancel($scope.myInterval);
            $scope.timerWithInterval = promise;
            // store the interval promise
            $scope.timerWithInterval++;
        }
        $scope.onInterval = function(){
            $scope.timerWithInterval++;
        }
    $scope.myInterval = $interval($scope.onInterval,1000);
    }

    $scope.stopTimerWithInterval = function() {
        if ($scope.myInterval){
            $interval.cancel($scope.myInterval);
            promise = $scope.timerWithInterval;
        }
    }

    $scope.resetTimerWithInterval = function(){
        $scope.timerWithInterval = 0;
        promise = 0;
        $interval.cancel($scope.myInterval);
    }

    $scope.confirmTime = function() {
        if (confirm('Are you sure you want to confirm this time?')) {

            if ( $scope.Input.hours > 0 && ( $scope.timer > 0 || $scope.timerWithInterval > 0) ) {
            // if confirm is true we save our object and go to the next view
                $scope.saveNewData();
                $scope.go('project-output-view');
            } else {
                alert('The time entered must be greater than zero.')
            }

        }
    }
})

.filter('hhmmss', function () {
    return function (time) {
        var sec_num = parseInt(time, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time    = hours+':'+minutes+':'+seconds;
        return time;
    }
});
