'use strict';

angular.module('angularApp')

.controller('firstCtrl', function($scope, dataService) {

    $scope.addField = function() {
        var field = {name: "This is a new field."};
        $scope.fields.unshift(field);
    };

    $scope.helloConsole = dataService.helloConsole;

    dataService.getFields(function(response) {
        console.log(response.data);
        $scope.fields = response.data;
    });

    $scope.deleteField = function(field, $index) {
        dataService.deleteField(field);
        $scope.fields.splice($index, 1);
    };

    $scope.saveFields = function() {
        var filteredFields = $scope.fields.filter(function(field) {
            if(field.edited) {
                return field;
            };
        });
        dataService.saveFields(filteredFields);
    };

})

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

});

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

        if ( currentTimerTime > 0 ) {
            // store the actual object properties in the timeRepo array
            $scope.newTime.minutes = Math.ceil($scope.timerWithInterval / 60);

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
                // if they're made the same day combine the minutes property
                if( $scope.Input.timeRepo.slice(-1)[0].timeStamp != index.timeStamp ){
                    count++;
                } else {
                    var match = count;
                    index.timeStamp = $scope.Input.timeRepo.slice(-1)[0].timeStamp,
                    index.minutes = $scope.Input.timeRepo.slice(-1)[0].minutes + index.minutes
                }
            })
            if ( count < newArray.length ) {
                $scope.Input.timeRepo.pop();
            }
            count = 0;

            $scope.timerWithInterval = '';

        } else {
            // store the actual object properties in the array item object
            $scope.newTime.minutes = $scope.timer;

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
                // if they're made the same day combine the minutes property
                if( $scope.Input.timeRepo.slice(-1)[0].timeStamp != index.timeStamp ){
                    count++;
                } else {
                    var match = count;
                    index.timeStamp = $scope.Input.timeRepo.slice(-1)[0].timeStamp,
                    index.minutes = $scope.Input.timeRepo.slice(-1)[0].minutes + index.minutes
                }
            })
            if ( count < newArray.length ) {
                $scope.Input.timeRepo.pop();
            }
            count = 0;

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

'use strict';

angular.module('angularApp')

.controller('outputCtlr', function ($scope, $location, $localStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Output = goalToBeTracked;

    $scope.$storage = $localStorage;

    angular.forEach($scope.$storage.project, function(index) {
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

'use strict';

angular.module('angularApp')

.controller('detailCtlr', function ($scope, $location, $localStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Detail = goalToBeTracked;

    $scope.$storage = $localStorage.project;

    angular.forEach($scope.$storage, function(index) {
        if( index.selected === true ) {
            $scope.Detail = index;
        } else {
            index.selected = false;
        }
    })

    $scope.timeObject = $scope.Detail.timeRepo;

    var twelveMonths=['January','February','March','April','May','June','July','August','September','October','November','December'];

    function buildCal(m, y, cM, cH, cDW, cD, brdr){

        var lastDayOfMonths=[31,0,31,30,31,30,31,31,30,31,30,31];
        var firstDayOfYear = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
        firstDayOfYear.dayOne=firstDayOfYear.getDay()+1; //DD replaced line to fix date bug when current day is 31st
        var todaydate=new Date() //DD added
        var scanForToday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added

        lastDayOfMonths[1]=(((firstDayOfYear.getFullYear()%100!=0)&&(firstDayOfYear.getFullYear()%4==0))||(firstDayOfYear.getFullYear()%400==0))?29:28;
        var table='<div class="'+cM+'"><table class="'+cM+'" cols="7" cellpadding="0" border="'+brdr+'" cellspacing="0"><tr align="center">';
        table+='<td colspan="7" align="center" class="'+cH+'">'+twelveMonths[m-1]+' - '+y+'</td></tr><tr align="center">';
        var s;
        for(s=0;s<7;s++)table+='<td class="'+cDW+'">'+"SMTWTFS".substr(s,1)+'</td>';
        table+='</tr><tr align="center">';
        for(i=1;i<=42;i++){
            var x=((i-firstDayOfYear.dayOne>=0)&&(i-firstDayOfYear.dayOne<lastDayOfMonths[m-1]))? i-firstDayOfYear.dayOne+1 : '&nbsp;';
            if (x==scanForToday) //DD added
            x='<span class="today">'+x+'</span>' //DD added

            var displayMonth = m;
            if (displayMonth < 10) { displayMonth = '0' + displayMonth; }
            var displayDay = ((i-firstDayOfYear.dayOne>=0)&&(i-firstDayOfYear.dayOne<lastDayOfMonths[m-1]))? i-firstDayOfYear.dayOne+1 : '&nbsp;';
            if (displayDay < 10) { displayDay = '0' + displayDay; }

            table+='<td id="'+y+'-'+displayMonth+'-'+displayDay+'" class="'+cD+'">'+x+'</td>';
            if(((i)%7==0)&&(i<36))table+='</tr><tr align="center">';
        }
        return table+='</tr></table></div>';
    }

    var todaydate=new Date()
    var curmonth=todaydate.getMonth()+1 //get current month (1-12)
    var curyear=todaydate.getFullYear() //get current year

    var dropDown = document.getElementById("calendar-menu");
    var option = dropDown.options[dropDown.selectedIndex];

    $scope.updateCalendar = function(theselection){
        if ( dropDown.selectedIndex > 0 ) {
            var themonth=parseInt(dropDown.selectedIndex);
            var calendarstr=buildCal(themonth, curyear, "main", "month", "daysofweek", "days", 0)
            if (dropDown) {
                var main = document.querySelector('.main:last-of-type');
                document.getElementById("calendar-space").innerHTML=calendarstr;

                angular.forEach($scope.Detail.timeRepo, function(index) {

                    if ( document.getElementById(index.timeStamp) != null ) {
                        var dataCell = document.getElementById(index.timeStamp);
                        var dataCellId = dataCell.id;
                    }

                    if( dataCell ){
                        var para = document.createElement("span");
                        var node = document.createTextNode(index.minutes.toFixed(0) + 'min');
                        para.appendChild(node);
                        dataCell.appendChild(para);
                    }
                })
            }
        }
    }

    $scope.listOfOptions = [];

    var i;
    for (i=0; i<12; i++) {//display option for 12 months of the year
        var opt = twelveMonths[i] + curyear;

        $scope.listOfOptions.push(opt);
    }

    document.getElementById("calendar-space").innerHTML=buildCal(curmonth, curyear, "main", "month", "daysofweek", "days", 0);

    angular.forEach($scope.Detail.timeRepo, function(index) {

        // error handling for new months
        if ( document.getElementById(index.timeStamp) ) {
            var dataCell = document.getElementById(index.timeStamp);
            var dataCellId = dataCell.id;
        }

        if( dataCell ){
            console.log('00000');
            var para = document.createElement("span");
            var node = document.createTextNode(index.minutes.toFixed(0) + 'min');
            para.classList.add("minutes");
            para.appendChild(node);
            dataCell.appendChild(para);
        }
    })
});
