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
