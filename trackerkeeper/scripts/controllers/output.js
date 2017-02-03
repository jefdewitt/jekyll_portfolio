'use strict';

angular.module('angularApp')

.controller('outputCtlr', function ($scope, $location, $localStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Output = goalToBeTracked;

    $scope.$storage = $localStorage;

<<<<<<< HEAD
    angular.forEach($scope.$storage.project, function(index) {
=======
    angular.forEach($scope.$storage, function(index) {
>>>>>>> 153d35ea4e7cf8daaa98c541550bca73a36a8672
        if( index.selected === true ) {
            $scope.Output = index;
        }
    })

    // establish project completion time in minutes
    // $scope.Output.goalTimeInMin = $scope.Output.time * 60;
    $scope.goalTimeInMin = $scope.Output.hours * 60;

    // get today's date and format it
    var dateObj = new Date();
    var month = dateObj.getMonth() + 1; //months from 1-12
    if (month < 10) { month = '0' + month; }
    var day = dateObj.getDate();
    if (day < 10) { day = '0' + day; }
    var year = dateObj.getFullYear();
    var today = year + "-" + month + "-" + day;

    angular.forEach($scope.Output.timeRepo, function(index) {
        // compare today's date to the date of the last item in our array
        if ( index.timeStamp === today ) {
            // convert today's time entry into hours
            $scope.todaysTime = index.minutes / 60;
            $scope.todaysPctg = ( index.minutes * 100 ) / $scope.goalTimeInMin;
        } else {
            $scope.todaysTime = 0;
            $scope.todaysPctg = 0;
        }
    });

    // we use map to grab object properties from within arrays -- SO STOKED!!!
    $scope.arrayMinutes = $scope.Output.timeRepo.map(function(object) {
        return object.minutes;
    });

    // grab the sum of the timeRepo
    $scope.sumOfEntries = $scope.arrayMinutes.reduce(function(a, b) {
        return a + b;
    }, 0);

    //
    // weekly daily average algorithms
    //

    // first, let's create a var with the date we'll use to establish one week ago
    var newDate = new Date();
    newDate.setDate(newDate.getDate() - 7);
    var sevenDaysAgo = newDate.getDate();
    if (sevenDaysAgo < 10) { sevenDaysAgo = '0' + sevenDaysAgo; }
    var monthMinusWeek = newDate.getMonth() + 1;
    if (monthMinusWeek < 10) { monthMinusWeek = '0' + monthMinusWeek; }
    var yearMinusWeek = newDate.getFullYear();
    var oneWeekAgo = yearMinusWeek + "-" + monthMinusWeek + "-" + sevenDaysAgo;
    var weekTime = 0;
    var count = 0;

    angular.forEach($scope.Output.timeRepo, function(index) {

        if( index.timeStamp > oneWeekAgo ) {
            weekTime += index.minutes;
            count++;
        }
    })

    // convert sum to hours
    $scope.weekTotalHours = weekTime / 60;

    // get the total of the entry's hours as a percentage of the whole project
    $scope.weekTotalPctg = ( weekTime * 100 ) /$scope.goalTimeInMin;

    // divide the sum of the timeRepo by the number of timeRepo
    if ( count === 0 ) {
        $scope.weekAvg = 0;
    } else {
        $scope.weekAvg = $scope.weekTotalHours / count;
    }

    // find the entry's daily average percentage of the whole project
    $scope.weekDailyAvgPctg = ( $scope.weekAvg * 100 ) / $scope.Output.hours;


    /**
     * monthly daily average algorithms
     */

    // first, let's create a var with the date we'll use to establish one month ago
    var newerDate = new Date();
    newerDate.setDate(newerDate.getDate() - 30);
    var thirtyDaysAgo = newerDate.getDate();
    if (thirtyDaysAgo < 10) { thirtyDaysAgo = '0' + thirtyDaysAgo; }
    var oneMonthAgo = newerDate.getMonth() + 1;
    if (oneMonthAgo < 10) { oneMonthAgo = '0' + oneMonthAgo; }
    var yearMinusMonth = newerDate.getFullYear();
    var oneMonthAgo = yearMinusMonth + "-" + oneMonthAgo + "-" + thirtyDaysAgo;
    var monthTime = 0;
    var count = 0;

    angular.forEach($scope.Output.timeRepo, function(index) {

        if( index.timeStamp > oneMonthAgo ) {
            monthTime += index.minutes;
            count++;
        }
    })


    // convert sum to hours
    $scope.monthTotalHours = monthTime / 60;

    // get the total of the entry's hours as a percentage of the whole project
    $scope.monthTotalPctg = ( monthTime * 100 ) /$scope.goalTimeInMin;

    // divide the sum of the timeRepo by the number of timeRepo
    if ( count === 0 ) {
        $scope.monthAvg = 0;
    } else {
        $scope.monthAvg = $scope.monthTotalHours / count;
    }

    // find the entry's daily average percentage of the whole project
    $scope.monthDailyAvgPctg = ( $scope.monthAvg * 100 ) / $scope.Output.hours;


    /**
     * yearly daily average algorithms
     */

     // first, let's create a var with the date we'll use to establish one year ago
     var newestDate = new Date();
     newestDate.setDate(newestDate.getDate() - 365);
     var threeHundredSixtyFiveDaysAgo = newestDate.getDate();
     if (threeHundredSixtyFiveDaysAgo < 10) { threeHundredSixtyFiveDaysAgo = '0' + threeHundredSixtyFiveDaysAgo; }
     var oneMonthAgoMinusYear = newestDate.getMonth() + 1;
     if (oneMonthAgoMinusYear < 10) { oneMonthAgoMinusYear = '0' + oneMonthAgoMinusYear; }
     var yearMinusYear = newestDate.getFullYear();

     var oneYearAgo = yearMinusYear + "-" + oneMonthAgoMinusYear + "-" + threeHundredSixtyFiveDaysAgo;
     var yearTime = 0;
     var count = 0;

     angular.forEach($scope.Output.timeRepo, function(index) {

         if( index.timeStamp > oneYearAgo ) {
             yearTime += index.minutes;
             count++;
         }
     })

    // convert sum to hours
    $scope.yearTotalHours = yearTime / 60;

    // get the total of the entry's hours as a percentage of the whole project
    $scope.yearTotalPctg = ( yearTime * 100 ) /$scope.goalTimeInMin;

    // divide the sum of the timeRepo by the number of timeRepo
    if ( count === 0 ) {
        $scope.yearAvg = 0;
    } else {
        $scope.yearAvg = $scope.yearTotalHours / count;
    }

    // find the entry's daily average percentage of the whole project
    $scope.yearDailyAvgPctg = ( $scope.yearAvg * 100 ) / $scope.Output.hours;

    /**
     * Project totals
     */
     $scope.totalAccumulated = $scope.sumOfEntries;

     $scope.totalAccumulatedHours = $scope.totalAccumulated / 60;

     $scope.totalAccumulatedPctg = ( $scope.totalAccumulated * 100 ) /$scope.goalTimeInMin;

});
