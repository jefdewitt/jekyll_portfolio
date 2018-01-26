webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_app_calendar_app_calendar_component__ = __webpack_require__("../../../../../src/app/views/app-calendar/app-calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_app_output_app_output_component__ = __webpack_require__("../../../../../src/app/views/app-output/app-output.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_app_list_app_list_component__ = __webpack_require__("../../../../../src/app/views/app-list/app-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_app_new_app_new_component__ = __webpack_require__("../../../../../src/app/views/app-new/app-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_app_input_app_input_component__ = __webpack_require__("../../../../../src/app/views/app-input/app-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'List Tracks', pathMatch: 'full' },
    { path: 'New Track', component: __WEBPACK_IMPORTED_MODULE_3__views_app_new_app_new_component__["a" /* AppNewComponent */] },
    { path: 'Input', component: __WEBPACK_IMPORTED_MODULE_6__views_app_input_app_input_component__["a" /* AppInputComponent */] },
    { path: 'Track Output', component: __WEBPACK_IMPORTED_MODULE_1__views_app_output_app_output_component__["a" /* AppOutputComponent */] },
    { path: 'Calendar', component: __WEBPACK_IMPORTED_MODULE_0__views_app_calendar_app_calendar_component__["a" /* AppCalendarComponent */] },
    { path: 'List Tracks', component: __WEBPACK_IMPORTED_MODULE_2__views_app_list_app_list_component__["a" /* AppListComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */]],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["g" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["d" /* HashLocationStrategy */]
                }
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#titleContainer {\n    position: relative;\n}\n\nh1 {\n    color: #b06d06;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 350%;\n}\n\nh1:first-child {\n    font-size: 550%;\n    opacity: .3;\n    white-space: nowrap;\n}\n\nh1:last-child {\n    position: absolute;\n    bottom: -1em;\n    right: .5em;\n}\n\nul {\n    padding-left: 0;\n}\n\nli {\n    list-style: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"titleContainer\">\n  <h1>{{ title }}</h1>\n  <h1>{{ time }}</h1>\n</div>\n<router-outlet></router-outlet>\n<nav>\n  <a routerLink=\"/New Track\"><img src=\"./assets/new.svg\"></a>\n  <a routerLink=\"/Input\"><img src=\"./assets/input.svg\"></a>\n  <a routerLink=\"/Track Output\"><img src=\"./assets/charts.svg\"></a>\n  <a routerLink=\"/Calendar\"><img src=\"./assets/calendar.svg\"></a>\n  <a routerLink=\"/List Tracks\"><img src=\"./assets/list.svg\"></a>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_goal_track_service__ = __webpack_require__("../../../../../src/app/services/goal-track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(goalTrackService, calendarService, router) {
        var _this = this;
        this.goalTrackService = goalTrackService;
        this.calendarService = calendarService;
        this.router = router;
        this.router.events.subscribe(function (event) {
            try {
                if (event.url) {
                    if ((event.url === '/New%20Track') || (event.url === '/List%20Tracks')) {
                        _this.title = 'Tracker';
                        _this.time = 'Keeper';
                    }
                    else if ((event.url != '/New%20Track') || (event.url != '/List%20Tracks')) {
                        _this.track = _this.goalTrackService.findSelectedTrack();
                        _this.title = (_this.track) ? _this.track['name'] : 'Tracker';
                        _this.time = (_this.track) ? _this.track['time'] : 'Keeper';
                    }
                    if (event.url != '/Input') {
                        _this.calendarService.dateFromCal = '';
                        _this.calendarService.hoursSelected = false;
                    }
                }
            }
            catch (error) {
                console.log('Unable to update track title ' + error.message);
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.routeToNewView();
    };
    /**
     * If there's no selected tracks (i.e., 0 tracks) go the new track view.
     */
    AppComponent.prototype.routeToNewView = function () {
        var selectedTrack = this.goalTrackService.findSelectedTrack();
        if (!selectedTrack) {
            this.router.navigateByUrl('/New Track');
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_services_goal_track_service__["a" /* GoalTrackService */], __WEBPACK_IMPORTED_MODULE_0__services_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_goal_track_service__ = __webpack_require__("../../../../../src/app/services/goal-track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_app_new_app_new_component__ = __webpack_require__("../../../../../src/app/views/app-new/app-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_app_input_app_input_component__ = __webpack_require__("../../../../../src/app/views/app-input/app-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_app_output_app_output_component__ = __webpack_require__("../../../../../src/app/views/app-output/app-output.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_app_calendar_app_calendar_component__ = __webpack_require__("../../../../../src/app/views/app-calendar/app-calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_app_list_app_list_component__ = __webpack_require__("../../../../../src/app/views/app-list/app-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__views_app_new_app_new_component__["a" /* AppNewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__views_app_input_app_input_component__["a" /* AppInputComponent */],
                __WEBPACK_IMPORTED_MODULE_7__views_app_output_app_output_component__["a" /* AppOutputComponent */],
                __WEBPACK_IMPORTED_MODULE_8__views_app_calendar_app_calendar_component__["a" /* AppCalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__views_app_list_app_list_component__["a" /* AppListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__services_goal_track_service__["a" /* GoalTrackService */],
                __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__goal_track_service__ = __webpack_require__("../../../../../src/app/services/goal-track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pairwise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/pairwise.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalendarService = (function () {
    function CalendarService(goalTrackService, router) {
        this.goalTrackService = goalTrackService;
        this.router = router;
        this.todayDate = new Date();
        this.curMonth = this.todayDate.getMonth() + 1;
        this.curYear = this.todayDate.getFullYear();
        this.twelveMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
    // Find an element with a specific ID (#calendar) and bind the calendar to it
    CalendarService.prototype.addCalendarToPage = function () {
        try {
            var calendar = document.getElementById("calendar");
            // Builds calendar & populates option elements
            calendar.innerHTML = this.buildCal(this.todayDate, this.curMonth, this.curYear, this.twelveMonths);
            this.populateCalendarDropdown(this.twelveMonths, this.curYear);
            this.addDateSpan();
        }
        catch (error) {
            console.log('Unable to add calendar to the page ' + error.message);
        }
    };
    /**
     *
     * @param todayDate
     * @param month
     * @param year
     * @param twelveMonths
     *
     * @todo Replace abbreviated vars with more descriptive names
     *
     * Builds a honkin' calendar, complete with a dropdown menu for the months (built
     * farther down below), month name and year as the calendar title, and weekday
     * initials shown atop the 7 columns of the calendar.
     */
    CalendarService.prototype.buildCal = function (todayDate, month, year, twelveMonths) {
        try {
            var lastDayOfMonths = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            var firstDayOfYear = new Date(year, month - 1, 1); //DD replaced line to fix date bug when current day is 31st
            var dayOne = firstDayOfYear.getDay() + 1; //DD replaced line to fix date bug when current day is 31st
            var scanForToday = (year == todayDate.getFullYear() && month == todayDate.getMonth() + 1) ? todayDate.getDate() : 0; //DD added
            lastDayOfMonths[1] = (((firstDayOfYear.getFullYear() % 100 != 0) && (firstDayOfYear.getFullYear() % 4 == 0)) || (firstDayOfYear.getFullYear() % 400 == 0)) ? 29 : 28;
            var table = '<div (click)="navigateFromCal()" class="main"><table class="" cols="7" cellpadding="0" border="0" cellspacing="0"><tr align="center">';
            table += '<td colspan="7" align="center" class="">' + twelveMonths[month - 1] + ' - ' + year + '</td></tr><tr align="center">';
            var s;
            for (s = 0; s < 7; s++)
                table += '<td class="">' + "SMTWTFS".substr(s, 1) + '</td>';
            table += '</tr><tr align="center">';
            for (var i = 1; i <= 42; i++) {
                var x = ((i - dayOne >= 0) && (i - dayOne < lastDayOfMonths[month - 1])) ? i - dayOne + 1 : '&nbsp;';
                if (x == scanForToday)
                    x = '<span class="today">' + x + '</span>'; //DD added
                var displayMonth = month;
                if (displayMonth < 10) {
                    displayMonth = '0' + displayMonth;
                }
                var displayDay = ((i - dayOne >= 0) && (i - dayOne < lastDayOfMonths[month - 1])) ? i - dayOne + 1 : '&nbsp;';
                if (displayDay < 10) {
                    displayDay = '0' + displayDay;
                }
                table += '<td id="' + year + '-' + displayMonth + '-' + displayDay + '" class="days">' + x + '</td>';
                if (((i) % 7 == 0) && (i < 36))
                    table += '</tr><tr align="center">';
            }
            return table += '</tr></table></div>';
        }
        catch (error) {
            console.log('Unable to build calendar ' + error.message);
        }
    };
    /**
     *
     * @param twelveMonths
     * @param curYear
     *
     * Provide an array of months and the current year to populate the
     * calendar dropdown menu.
     */
    CalendarService.prototype.populateCalendarDropdown = function (twelveMonths, curYear) {
        try {
            this.options = [];
            for (var i = 0; i < 12; i++) {
                var opt = twelveMonths[i];
                this.options.push(opt);
            }
            return this.options;
        }
        catch (error) {
            console.log('Unable to populate calendar dropdown ' + error.message);
        }
    };
    // Rebuild calendar when a new month is selected from the dropdown
    CalendarService.prototype.updateCalendarMonth = function ($event) {
        try {
            var theMonth = parseInt($event.target.selectedIndex) + 1;
            var updatedMonth = this.buildCal(this.todayDate, theMonth, this.curYear, this.twelveMonths);
            document.getElementById("calendar").innerHTML = updatedMonth;
            this.addDateSpan();
        }
        catch (error) {
            console.log('Unable to update calendar month ' + error.message);
        }
    };
    // Add a span that contains the time completed for the date displayed
    CalendarService.prototype.addDateSpan = function () {
        try {
            var calendarMenu = document.getElementById("calendar-menu");
            if (calendarMenu) {
                var main = document.querySelector('.main:last-of-type');
                var selectedTrack = this.goalTrackService.findSelectedTrack();
                for (var i = 0; i < selectedTrack['dates'].length; i++) {
                    var recordedDate = selectedTrack['dates'][i].recordedDate;
                    var recordedMinutes = selectedTrack['dates'][i].recordedMinutes;
                    var dataCell = document.getElementById(recordedDate);
                    if (dataCell) {
                        var para = document.createElement("span");
                        para.classList.add('timeStamp-' + recordedDate);
                        var node = document.createTextNode(recordedMinutes);
                        para.appendChild(node);
                        dataCell.appendChild(para);
                    }
                }
            }
        }
        catch (error) {
            console.log('Unable to add span to calendar cells ' + error.message);
        }
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__goal_track_service__["a" /* GoalTrackService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "../../../../../src/app/services/goal-track.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalTrackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoalTrackService = (function () {
    function GoalTrackService() {
    }
    // Returns the current selected track
    GoalTrackService.prototype.findSelectedTrack = function () {
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var track = localStorage.getItem(localStorage.key(i));
                track = JSON.parse(track);
                if (track['selected'] === true) {
                    return track;
                }
            }
        }
        catch (error) {
            console.log('Currently there\'s no selected track. ' + error.message);
        }
    };
    // Confirms no other tracks exist with desired name
    GoalTrackService.prototype.nameCheck = function (name) {
        try {
            if (name) {
                if (localStorage.length > 1) {
                    for (var i = 0; i < localStorage.length; i++) {
                        var track = localStorage.getItem(localStorage.key(i));
                        track = JSON.parse(track);
                        if (name === track['name']) {
                            alert('This track already exists. Please choose a different name.');
                            return false;
                        }
                        else if (name === '') {
                            alert('Please choose a name.');
                            return false;
                        }
                        else if (i === (localStorage.length - 1)) {
                            this.deselectTracks();
                            return true;
                        }
                    }
                }
                else {
                    this.deselectTracks();
                    return true;
                }
            }
            else {
                alert('Please enter a name.');
            }
        }
        catch (error) {
            console.log('Name check failed. ' + error.message);
        }
    };
    // Confirms if time was actually entered
    GoalTrackService.prototype.timeCheck = function (time) {
        if (time > 0) {
            return true;
        }
        else {
            alert('Please enter a time greater than 0.');
        }
    };
    // Defaults all tracks selected property to false 
    GoalTrackService.prototype.deselectTracks = function () {
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var track = localStorage.getItem(localStorage.key(i));
                track = JSON.parse(track);
                track['selected'] = false;
                localStorage.setItem(track['name'], JSON.stringify(track));
            }
        }
        catch (error) {
            console.log('Deselecting tracks failed. ' + error.message);
        }
    };
    // Create a date object with today's date, format YYYY-MM-DD
    GoalTrackService.prototype.createDateObject = function () {
        var dateObj = new Date();
        // console.log(dateObj);
        dateObj.setHours(dateObj.getHours() + 5);
        // console.log(dateObj);
        var month;
        month = dateObj.getUTCMonth() + 1; //months from 1-12
        if (month < 10) {
            month = '0' + month;
        }
        var day;
        day = dateObj.getUTCDate();
        if (day < 10) {
            day = '0' + day;
        }
        var year = dateObj.getUTCFullYear();
        var newDate = year + "-" + month + "-" + day;
        return newDate;
    };
    /**
     *
     * @param daysAgo
     *
     * Pass in a number to return the date from as far
     * back as the time specified.
     */
    GoalTrackService.prototype.dateOfNthDaysAgo = function (daysAgo) {
        try {
            var newDate = new Date();
            newDate.setHours(newDate.getHours() + 5);
            newDate.setDate(newDate.getDate() - daysAgo);
            var nthDaysAgo;
            nthDaysAgo = newDate.getDate();
            if (nthDaysAgo < 10) {
                nthDaysAgo = '0' + nthDaysAgo;
            }
            var monthMinusNthDaysAgo;
            monthMinusNthDaysAgo = newDate.getMonth() + 1;
            if (monthMinusNthDaysAgo < 10) {
                monthMinusNthDaysAgo = '0' + monthMinusNthDaysAgo;
            }
            var yearMinusNthDaysAgo = newDate.getFullYear();
            var dateNthDaysAgo = yearMinusNthDaysAgo + '-' + monthMinusNthDaysAgo + '-' + nthDaysAgo;
            return dateNthDaysAgo;
        }
        catch (error) {
            console.log('Can\'t find date from ' + daysAgo + ' days ago' + error.message);
        }
    };
    /**
     *
     * @param trackName : string
     * @param startTime : number
     * @param endTime   : number
     *
     * The startTime is the number of days from today to begin the maths and the endTime is number of days from today
     * to end the maths. Set the fourth param to true to return a percentage.
     *
     * Example: this.goalTrackService.timeInInterval('firstTrack', 0, 0); // Returns today's time
     * Example: this.goalTrackService.timeInInterval('firstTrack', 0, 6); // Returns last week's sum of time
     * Example: this.goalTrackService.timeInInterval('firstTrack', 15, 45) // Returns one month of time beginning 15 days ago.
     */
    GoalTrackService.prototype.timeInInterval = function (trackName, startTime, endTime) {
        try {
            var track = this.findTrackByName(trackName);
            var startDate = this.dateOfNthDaysAgo(startTime);
            var endDate = this.dateOfNthDaysAgo(endTime);
            var sum = 0;
            for (var i = 0; i < track['dates'].length; i++) {
                var recordedDate = track['dates'][i].recordedDate;
                if ((recordedDate <= startDate) && (recordedDate >= endDate)) {
                    sum += track['dates'][i].recordedMinutes;
                }
            }
            return sum;
        }
        catch (error) {
            console.log('Can\'t find sum in time interval provided for ' + track + ' track ' + error.message);
        }
    };
    /**
     *
     * @param sum
     * @param interval
     *
     * Pass a sum and a time interval (7 = week, 30 = month, etc) to find daily minutes
     */
    GoalTrackService.prototype.dailyMinutes = function (sum, interval) {
        try {
            var percent = (sum === 0 || interval === 0) ? 0 : sum / interval;
            return percent;
        }
        catch (error) {
            console.log('Can\'t find daily minutes from ' + sum + ' / ' + interval + '. ' + error.message);
        }
    };
    /**
     *
     * @param trackName
     * @param sum
     * @param interval
     */
    GoalTrackService.prototype.dailyPercentage = function (trackName, sum, interval) {
        try {
            var track = this.findTrackByName(trackName);
            var timeGoal = track['time'];
            var percent = (sum / timeGoal) * 100;
            var dailyPercent = (percent === 0 || interval === 0) ? 0 : percent / interval;
            return dailyPercent;
        }
        catch (error) {
            console.log('Can\'t find daily percentage from ' + trackName + ', ' + sum + ' & ' + interval + '. ' + error.message);
        }
    };
    /**
     *
     * @param trackName
     * @param sum
     *
     * Pass a track name and sum to find the overall percentage of the track completed.
     */
    GoalTrackService.prototype.percentOfEntireGoal = function (trackName, sum) {
        try {
            var track = this.findTrackByName(trackName);
            var timeGoal = track['time'] * 60;
            var percent = (sum / timeGoal) * 100;
            return percent;
        }
        catch (error) {
            console.log('Can\'t find daily percentage from ' + trackName['name'] + ' & ' + sum + '. ' + error.message);
        }
    };
    /**
     *
     * @param numberOfDays
     *
     * Pass the number of days you want data on and the time completed for each day will be
     * returned in a tidy array;
     */
    GoalTrackService.prototype.findRecentTime = function (trackName, numberOfDays) {
        try {
            var selected = this.findTrackByName(trackName);
            var recentTime = [];
            for (var i = 0; i < numberOfDays; i++) {
                var timeEntry = this.timeInInterval(selected['name'], i, i);
                timeEntry = timeEntry / 60;
                timeEntry = timeEntry.toFixed(1);
                recentTime.push(timeEntry);
                recentTime.reverse();
            }
            return recentTime;
        }
        catch (error) {
            console.log('Can\'t find recent time from ' + numberOfDays + '. ' + error.message);
        }
    };
    GoalTrackService.prototype.findTrackByName = function (track) {
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var storedTrack = localStorage.getItem(localStorage.key(i));
                storedTrack = JSON.parse(storedTrack);
                if (storedTrack['name'] === track) {
                    return storedTrack;
                }
            }
        }
        catch (error) {
            console.log('Unable to find ' + track + ' by name ' + error.message);
        }
    };
    GoalTrackService.prototype.overallCompleted = function (track) {
        try {
            var thisTrack = this.findTrackByName(track);
            var sum = 0;
            for (var i = 0; i < thisTrack['dates'].length; i++) {
                // let recordedDate = thisTrack['dates'][i].recordedDate;
                sum += thisTrack['dates'][i].recordedMinutes;
            }
            return (sum / (thisTrack['time'] * 60)) * 100;
        }
        catch (error) {
            console.log('Currently there\'s no selected track. ' + error.message);
        }
    };
    GoalTrackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GoalTrackService);
    return GoalTrackService;
}());



/***/ }),

/***/ "../../../../../src/app/views/app-calendar/app-calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* @import '~angular-calendar/css/angular-calendar.css'; */\n\ntable {\n    width: 100%;\n    height: 20em;\n}\n\ntr:nth-of-type(n+3) td {\n    position: relative;\n    padding-right: 20px;\n    font-size: 20px;\n    border: 1px solid #ddd;\n}\n\nspan[class^=\"timeStamp\"]{\n    pointer-events: none;\n    position: absolute;\n    bottom: 0;\n    right: 4px;\n    color: red;\n    font-size: 14px;\n}\n\n#calendarOptions form {\n    float: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/app-calendar/app-calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"calendarOptions\">\n  <select id=\"calendar-menu\" (change)=\"onSelected($event)\">\n    <!-- <option style=\"display:none\" value=\"\">select a month</option>\"; -->\n    <option *ngFor=\"let option of options\">{{ option }}</option>\n  </select>\n\n  <form>\n    <input type=\"checkbox\" name=\"minutes\" id=\"minutes\" class=\"checkbox\" (click)=\"changeCheckbox($event)\">\n    <label for=\"minutes\">Minutes</label>\n    <input type=\"checkbox\" name=\"hours\" id=\"hours\" class=\"checkbox\" (click)=\"changeCheckbox($event)\">\n    <label for=\"hours\">Hours</label>\n  </form>\n</div>\n\n<div id=\"calendar\"></div>\n\n<!-- <ul>\n    <li *ngFor=\"let option of options\">{{ option }}</li>\n</ul> -->\n"

/***/ }),

/***/ "../../../../../src/app/views/app-calendar/app-calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppCalendarComponent = (function () {
    function AppCalendarComponent(calendarService, router) {
        this.calendarService = calendarService;
        this.router = router;
    }
    AppCalendarComponent.prototype.ngOnInit = function () {
        this.calendarService.addCalendarToPage();
        this.options = this.calendarService.options;
        this.hourCheckbox = document.getElementById("hours");
        this.minuteCheckbox = document.getElementById("minutes");
        this.minuteCheckbox.checked = true;
    };
    AppCalendarComponent.prototype.onSelected = function ($event) {
        this.calendarService.updateCalendarMonth($event);
    };
    AppCalendarComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        /**
         * Listen for clicks that occur on calendar cells and move to the input view
         * with any completed time for that date already loaded to be overwritten.
         */
        var selector = document.querySelector('.main');
        selector.addEventListener('click', function ($event) {
            debugger;
            try {
                var multiEl = document.querySelectorAll('.days');
                var spanTime = void 0;
                if ($event.target.children.length === 2) {
                    spanTime = $event.target.children[1].innerHTML;
                }
                else if ($event.target.children.length === 1) {
                    spanTime = $event.target.firstElementChild.innerHTML;
                }
                else {
                    spanTime = 0;
                }
                _this.calendarService.minutesFromCal = spanTime;
                if (multiEl.length > 0) {
                    if ($event.target.id) {
                        _this.calendarService.dateFromCal = $event.target.id;
                        _this.router.navigateByUrl('/Input');
                    }
                }
            }
            catch (error) {
                console.log('Unable to find calendar cell id ' + error.message);
            }
        });
    };
    AppCalendarComponent.prototype.changeCheckbox = function ($event) {
        if ($event.target.id === "minutes") {
            if (this.minuteCheckbox.checked = true) {
                this.calendarService.hoursSelected = false;
                this.hourCheckbox.checked = false;
            }
            else {
                this.hourCheckbox.checked = true;
            }
        }
        else if ($event.target.id === "hours") {
            if (this.hourCheckbox.checked = true) {
                this.calendarService.hoursSelected = true;
                this.minuteCheckbox.checked = false;
            }
            else {
                this.minuteCheckbox.checked = true;
            }
        }
        this.hoursToMinutes($event);
    };
    AppCalendarComponent.prototype.hoursToMinutes = function ($event) {
        var multiSpans = document.querySelectorAll('span');
        for (var i = 0; i < multiSpans.length; i++) {
            var spanTimeStamp = multiSpans[i].className.split('-');
            spanTimeStamp = spanTimeStamp[0];
            var savedTimeInMin = multiSpans[i].innerHTML;
            if (spanTimeStamp === 'timeStamp') {
                if (this.hourCheckbox.checked) {
                    var singleSpan = multiSpans[i].innerHTML / 60;
                    multiSpans[i].innerHTML = singleSpan.toFixed(2);
                }
                else {
                    var singleSpan = multiSpans[i].innerHTML * 60;
                    multiSpans[i].innerHTML = singleSpan.toFixed(0);
                }
            }
        }
    };
    AppCalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-app-calendar',
            template: __webpack_require__("../../../../../src/app/views/app-calendar/app-calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/app-calendar/app-calendar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppCalendarComponent);
    return AppCalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/app-input/app-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/app-input/app-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!noTracks\"> \n  <form>\n    <h2>Made Progress? Add Time Here</h2>\n    <input type=\"text\" name=\"minutes\" id=\"minutes\" [(ngModel)]=\"minutes\" placeholder=\"Enter Minutes\">\n    <input type=\"checkbox\" name=\"hours\" id=\"hours\" (click)=\"minutesOrHours()\">\n    <label for=\"hours\">Hours</label>\n    <button (click)='addMinutes(minutes)'>Submit</button>\n  </form>\n  <div *ngIf=\"routeFromCal\">\n    <p>Pressing submit will overwrite the <strong>{{ minutesAlreadyEntered }} {{ increment }}</strong> you've already entered for <strong>{{ routeFromCal }}</strong>.</p>\n  </div>\n</div>\n<div *ngIf=\"noTracks\"><h2>Currently there are 0 tracks. Please create one, dummy.</h2></div>\n"

/***/ }),

/***/ "../../../../../src/app/views/app-input/app-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_goal_track_service__ = __webpack_require__("../../../../../src/app/services/goal-track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppInputComponent = (function () {
    function AppInputComponent(goalTrackService, calendarService, router) {
        var _this = this;
        this.goalTrackService = goalTrackService;
        this.calendarService = calendarService;
        this.router = router;
        this.selected = this.goalTrackService.findSelectedTrack();
        this.noTracks = false;
        this.router.events.subscribe(function (event) {
            try {
                if (event.url) {
                    if (event.url === '/Input' && _this.calendarService.dateFromCal) {
                        var routeFromCal = _this.calendarService.dateFromCal;
                        _this.setRouteTrigger(routeFromCal);
                        if (_this.calendarService.hoursSelected) {
                            _this.increment = 'hours';
                        }
                        else {
                            _this.increment = 'minutes';
                        }
                    }
                }
            }
            catch (error) {
                console.log('Unable to display time overwrite message ' + error.message);
            }
        });
    }
    ;
    AppInputComponent.prototype.ngOnInit = function () { };
    AppInputComponent.prototype.ngAfterContentInit = function () {
        var track = this.goalTrackService.findSelectedTrack();
        if (!track) {
            this.noTracks = true;
        }
    };
    AppInputComponent.prototype.setRouteTrigger = function (routeFromCal) {
        this.minutesAlreadyEntered = this.calendarService.minutesFromCal;
        this.routeFromCal = routeFromCal;
    };
    AppInputComponent.prototype.disableRouteTrigger = function () {
        this.calendarService.dateFromCal = '';
        this.routeFromCal = '';
        this.calendarService.minutesFromCal = '';
        this.minutesAlreadyEntered = '';
    };
    /**
     * Check to see if user is inputting time in hours.
     * We declares these as lets instead of class properties cuz they aren't
     * loaded in time for Angular to find them in the DOM otherwise.
     */
    AppInputComponent.prototype.minutesOrHours = function () {
        var minutesInput = document.getElementById("minutes");
        var hours = document.getElementById("hours");
        var isChecked = hours.checked;
        if (isChecked) {
            minutesInput.setAttribute('placeholder', 'Enter Hours');
            if (this.minutes) {
                this.minutes = this.minutes * 60;
            }
        }
        else {
            minutesInput.setAttribute('placeholder', 'Enter Minutes');
        }
    };
    // Have previous times been entered for the date being checked?
    AppInputComponent.prototype.sameDateCheck = function () {
        for (var i = 0; i < this.selected['dates'].length; i++) {
            if (this.selected['dates'][i].recordedDate === this.timeObject.recordedDate) {
                var oldMinutes = this.selected['dates'][i].recordedMinutes;
                var newMinutes = this.timeObject.recordedMinutes;
                this.selected['dates'][i].recordedMinutes = +oldMinutes + +newMinutes;
                return;
            }
        }
        this.selected['dates'].push(this.timeObject);
    };
    /**
     *
     * @param providedDate
     *
     * Sets time object minutes key from input field
     */
    AppInputComponent.prototype.setTimeObject = function (providedDate) {
        this.timeObject = {
            recordedMinutes: +this.minutes,
            recordedDate: providedDate
        };
    };
    /**
     * Confirms that a valid time was entered & whether any previous
     * times were entered on that date.
     */
    AppInputComponent.prototype.checkForValidMinAndDate = function () {
        try {
            if (this.timeObject.recordedMinutes > 0) {
                if (this.selected['dates'].length >= 1) {
                    // Check for same date entries
                    this.sameDateCheck();
                }
                else {
                    this.selected['dates'].push(this.timeObject);
                }
            }
            else {
                alert('Please provide a time greater than 0.');
                return;
            }
        }
        catch (error) {
            console.log('Minutes & dates validation failed ' + error.message);
        }
    };
    // Adds minutes to local storage for submit button clicks
    AppInputComponent.prototype.addMinutes = function () {
        try {
            if (this.routeFromCal) {
                this.editTimeFromCal(this.routeFromCal);
            }
            else {
                // Create new time object for the dates array
                this.setTimeObject(this.goalTrackService.createDateObject());
                // Check if minutes or hours
                this.minutesOrHours();
                // Check if min > 0 and if there are prev. date entries in dates array
                this.checkForValidMinAndDate();
            }
        }
        catch (error) {
            console.log('Dates array is unavailable ' + error.message);
        }
        console.log(localStorage);
        localStorage.setItem(this.selected['name'], JSON.stringify(this.selected));
        this.minutes = null;
        this.routeFromCal = '';
        this.router.navigateByUrl('/Track Output');
    };
    /**
     *
     * @param routeFromCal
     *
     * routeFromCal is the id value of the calendar cell that was clicked
     *
     * Preloads the time completed (if any) for the date clicked on from
     * the calendar view & triggers a message to be displayed re: that any
     * new submit button clicks will overwrite any previous time entered
     * for that date.
     */
    AppInputComponent.prototype.editTimeFromCal = function (routeFromCal) {
        try {
            alert('Overwrite the ' + this.minutesAlreadyEntered + ' ' + this.increment + ' you already have saved for ' + this.routeFromCal + '?');
            this.minutesOrHours();
            for (var i = 0; i < this.selected['dates'].length; i++) {
                var storeDate = this.selected['dates'][i].recordedDate;
                var storeTime = this.selected['dates'][i].recordedMinutes;
                if (routeFromCal === storeDate) {
                    this.selected['dates'][i].recordedMinutes = +this.minutes;
                    this.disableRouteTrigger();
                    return;
                }
            }
            this.setTimeObject(routeFromCal);
            this.checkForValidMinAndDate();
            this.disableRouteTrigger();
        }
        catch (error) {
            console.log('Unable to add time from calendar cell click ' + error.message);
        }
    };
    AppInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-app-input',
            template: __webpack_require__("../../../../../src/app/views/app-input/app-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/app-input/app-input.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_goal_track_service__["a" /* GoalTrackService */], __WEBPACK_IMPORTED_MODULE_0__services_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AppInputComponent);
    return AppInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/app-list/app-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n    padding-bottom: 20px;\n    position: relative;\n    border: 1px solid #ddd;\n    padding: 10px;\n    margin-bottom: 20px;\n}\n\nli a {\n    text-decoration: none;\n}\n\n.hasTracks h2 {\n    color: #b06d06;\n}\n\n.hasTracks h2:first-of-type {\n    font-size: 3em;\n    opacity: .4;\n    margin: 0 0 0 1em;\n    text-align: left;\n}\n\n.hasTracks h2:last-of-type {\n    position: absolute;\n    bottom: .25em;\n    right: 1em;\n    margin: 0;\n}\n\nspan#delete {\n    position: absolute;\n    left: 16px;\n    top: 50%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n    font-family: sans-serif;\n}\n\nspan.delete:before {\n\n}\n\nspan.percent {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: .25em;\n    color: #000;\n}\n\n.noTracks h2 {\n    color: #000;\n    font-size: 1.5em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/app-list/app-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!noTracks\">\n    <ul>\n        <li *ngFor=\"let track of tracks\" class=\"hasTracks\"><a href=\"/Track Input\" [routerLink]=\"['/Track Input']\" (click)=\"makeSelectedTrack($event)\"><span id=\"delete\" (click)=\"deleteTrack($event)\">x</span><h2>{{ track.name }}</h2><h2>{{ track.time }} hours</h2><span class=\"percent\">{{ findPercentCompleted(track.name) }}% done</span></a></li>\n    </ul>\n</div>\n<div *ngIf=\"noTracks\" [class.noTracks]=\"noTracks\" ><h2>Currently there are 0 tracks. Please create one, dummy.</h2></div>"

/***/ }),

/***/ "../../../../../src/app/views/app-list/app-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_goal_track_service__ = __webpack_require__("../../../../../src/app/services/goal-track.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppListComponent = (function () {
    function AppListComponent(goalTrackService, router) {
        this.goalTrackService = goalTrackService;
        this.router = router;
    }
    AppListComponent.prototype.ngOnInit = function () {
        this.getAllTracks();
    };
    // Display all the tracks from localstorage
    AppListComponent.prototype.getAllTracks = function () {
        try {
            this.tracks = [];
            for (var i = 0; i < localStorage.length; i++) {
                var track = localStorage.getItem(localStorage.key(i));
                track = JSON.parse(track);
                this.tracks.push(track);
            }
            if (this.tracks.length > 0) {
                return this.tracks;
            }
            else {
                this.noTracks = true;
            }
        }
        catch (error) {
            console.log('Unable to retrive tracks list. ' + error.message);
        }
    };
    /**
     *
     * Loop thru tracks from localstorage and turn the selected key
     * for the track clicked to true
     */
    AppListComponent.prototype.makeSelectedTrack = function ($event) {
        try {
            var clickedTrack = $event.target.innerHTML;
            this.goalTrackService.deselectTracks();
            for (var i = 0; i < localStorage.length; i++) {
                var storedTrack = localStorage.getItem(localStorage.key(i));
                storedTrack = JSON.parse(storedTrack);
                if (storedTrack['name'] === clickedTrack) {
                    storedTrack['selected'] = true;
                    localStorage.setItem(storedTrack['name'], JSON.stringify(storedTrack));
                    this.router.navigateByUrl('/Input');
                }
            }
        }
        catch (error) {
            console.log('Could not change selected track ' + error.message);
        }
    };
    AppListComponent.prototype.findPercentCompleted = function (trackName) {
        var percentCompleted = this.goalTrackService.overallCompleted(trackName);
        return percentCompleted.toFixed(0);
    };
    AppListComponent.prototype.deleteTrack = function ($event) {
        alert('Are you sure you want to delete this track? It can\'t be recovered.');
        var track = $event.target.nextSibling.innerHTML;
        this.goalTrackService.findTrackByName(track);
        localStorage.removeItem(track);
        this.getAllTracks();
    };
    AppListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-app-list',
            template: __webpack_require__("../../../../../src/app/views/app-list/app-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/app-list/app-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_goal_track_service__["a" /* GoalTrackService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], AppListComponent);
    return AppListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/app-new/app-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/app-new/app-new.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"mainWrapper\">\n  <h2>Name of Track</h2>\n  <input type=\"text\" name=\"name\" [(ngModel)]=\"name\">\n  <h2>Time to Track (in hours)</h2>\n  <input type=\"number\" name=\"time\" [(ngModel)]=\"time\">\n  <button (click) = 'createNewGoal(name, time)'>Submit</button>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/app-new/app-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_goal_track_service__ = __webpack_require__("../../../../../src/app/services/goal-track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppNewComponent = (function () {
    function AppNewComponent(goalTrackService, router) {
        this.goalTrackService = goalTrackService;
        this.router = router;
    }
    AppNewComponent.prototype.ngOnInit = function () { };
    /**
       * Handles name and time for goal, and updates the storage service to reflect the change.
       *
       * @param {string} name
       * @param {number} time
       */
    AppNewComponent.prototype.createNewGoal = function (name, time) {
        var nameCheck = this.goalTrackService.nameCheck(this.name);
        var timeCheck = this.goalTrackService.timeCheck(this.time);
        if (nameCheck && timeCheck) {
            this.goal = {
                name: this.name,
                time: this.time,
                selected: true,
                dates: []
            };
            localStorage.setItem(this.goal.name, JSON.stringify(this.goal));
            this.name = '';
            this.time = null;
            // localStorage.clear();
            console.log(localStorage);
            this.router.navigateByUrl('/Input');
        }
    };
    AppNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-app-new',
            template: __webpack_require__("../../../../../src/app/views/app-new/app-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/app-new/app-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_goal_track_service__["a" /* GoalTrackService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppNewComponent);
    return AppNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/app-output/app-output.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#progressContainer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    min-height: 100px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 330px;\n    margin: 0 auto 50px;\n}\n\n#progressHeader {\n    margin-bottom: 50px;\n}\n\n/* #progressContainer div {\n    transform: rotate(270deg);\n} */\n\n.progressBar {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n    height: 4px;\n    width: 100px;\n    position: relative;\n}\n\nprogress {\n    position: absolute;\n    /* height: 10px; */\n    /* min-height: 20px; */\n    /* width: 100px; */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    left: 50%;\n    top: 50%;\n    display: inline-block;\n    /* background: #666; */\n}\n\nprogress[value] {\n    box-sizing: border-box;\n    display: inline-block;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n         appearance: none;\n    opacity: .5;\n    height: 47px;\n    width: 100px;\n}\n\nprogress[value]::-webkit-progress-bar {\n    /* color: red; */\n    background-color: #eee;\n    border-radius: 2px;\n    /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset; */\n}\n\n/* progress[value]::-webkit-progress-value::before {\n    content: '80%';\n    position: absolute;\n    right: 0;\n    top: -125%;\n} */\n\n.before {\n    content: '';\n    position: absolute;\n    left: -55px;\n    top: 50%;\n    -webkit-transform: translatey(-50%) rotate(90deg);\n            transform: translatey(-50%) rotate(90deg);\n    width: 100%;\n    height: 100%;\n}\n\n.after {\n    position: absolute;\n    right: -45px;\n    top: 50%;\n    -webkit-transform: translatey(-50%) rotate(90deg);\n            transform: translatey(-50%) rotate(90deg);\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n}\n\nprogress::-webkit-progress-value {\n    transition: 1s width ease-in-out;\n}\n\n#formContainer h2 {\n    /* text-align: center; */\n}\n\nform {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\n\nul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\nli {\n    padding: 0;\n    margin: 0;\n    height: 100px;\n    width: 20px;\n}\n\n.monthView progress{\n    height: 11px;\n}\n\n.monthView .before,\n.monthView .after {\n    font-size: 4px;\n}\n\n.yearView progress{\n    height: 1px;\n}\n\n.yearView .before,\n.yearView .after {\n    display: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/app-output/app-output.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!noTracks\">\n    <h2 id=\"progressHeader\">You've completed {{ percentageDone.toFixed(0) }}%<br> of your goal{{ completed }}!</h2>\n    <div id=\"progressContainer\">   \n        <div class=\"progressBar\" [class.monthView]=\"isMonthView\" [class.yearView]=\"isYearView\" *ngFor=\"let dailyRecordedTime of dailyRecordedTimes; let index = index; let count = count\"><span class=\"before\">{{ dailyRecordedTime['date'] }}</span><progress max=\"12\" value=\"{{ dailyRecordedTime['time'] }}\"></progress><span class=\"after\">{{ dailyRecordedTime['time'] }}<br>hrs</span></div>\n    </div>\n    <div id=\"formContainer\">\n        <h3>Your {{ timePeriod }} was\n            {{ dailyMinutes.toFixed(0) }} minutes or\n            {{ dailyPercentage.toFixed(2) }}% completed!\n        </h3>\n        <form action=\"\">\n            <input type=\"radio\" name=\"timeFrame\" id=\"today\" class=\"radio\" (click)=\"changeTimeFrame($event)\">\n            <label for=\"today\">Today</label>\n            <input type=\"radio\" name=\"timeFrame\" id=\"week\" class=\"radio\" (click)=\"changeTimeFrame($event)\">\n            <label for=\"week\">Week</label>\n            <input type=\"radio\" name=\"timeFrame\" id=\"month\" class=\"radio\" (click)=\"changeTimeFrame($event)\">\n            <label for=\"month\">Month</label>\n            <input type=\"radio\" name=\"timeFrame\" id=\"year\" class=\"radio\" (click)=\"changeTimeFrame($event)\">\n            <label for=\"year\">Year</label>\n        </form>\n    </div>\n</div>\n<div *ngIf=\"noTracks\"><h2>Currently there are 0 tracks. Please create one, dummy.</h2></div>\n\n"

/***/ }),

/***/ "../../../../../src/app/views/app-output/app-output.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppOutputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_goal_track_service__ = __webpack_require__("../../../../../src/app/services/goal-track.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppOutputComponent = (function () {
    function AppOutputComponent(goalTrackService, router) {
        this.goalTrackService = goalTrackService;
        this.router = router;
        this.dailyMinutes = null;
        this.dailyPercentage = null;
        this.percentageDone = null;
        this.timePeriod = 'progress today';
        this.completed = ' today';
        this.dailyRecordedTimes = [];
        this.noTracks = false;
        var track = this.goalTrackService.findSelectedTrack();
        if (!track) {
            this.noTracks = true;
        }
        else {
            debugger;
            var sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 0);
            this.dailyMinAndPerc(track, sumInInterval, 1);
        }
    }
    AppOutputComponent.prototype.ngOnInit = function () { };
    AppOutputComponent.prototype.ngAfterContentInit = function () {
        this.dailyRecordedTimes = this.populateProgressBars(7);
    };
    /**
     *
     * @param interval
     * @param timeFrame
     *
     * The interval param is the same as the one in this.percentCompleted(interval).
     * The timeFrame param is the range, or the total number of days we use to
     * divide the sum of the times we collected since the date we provided above.
     */
    AppOutputComponent.prototype.dailyMinAndPerc = function (track, sumInInterval, daysInInterval) {
        this.dailyMinutes = this.goalTrackService.dailyMinutes(sumInInterval, daysInInterval);
        this.dailyPercentage = this.goalTrackService.dailyPercentage(track['name'], sumInInterval, daysInInterval);
        this.dailyPercentage = this.dailyPercentage / 60;
        this.dailyRecordedTimes = this.goalTrackService.findRecentTime(track['name'], 1);
        this.percentageDone = this.goalTrackService.percentOfEntireGoal(track['name'], sumInInterval);
    };
    AppOutputComponent.prototype.addDayOfMonth = function (index) {
        var date = this.goalTrackService.dateOfNthDaysAgo(index);
        date = date.split('-');
        date = date[2];
        this.dayOfMonth = date;
        return date;
    };
    // Check to see if user is selecting checkboxes
    AppOutputComponent.prototype.changeTimeFrame = function ($event) {
        var timeValue = $event.target.id;
        try {
            this.isMonthView = false;
            this.isYearView = false;
            var track = this.goalTrackService.findSelectedTrack();
            switch (timeValue) {
                case 'today':
                    var sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 0);
                    this.dailyMinAndPerc(track, sumInInterval, 1);
                    this.timePeriod = 'progress today';
                    this.completed = ' today';
                    this.dailyRecordedTimes = this.populateProgressBars(1);
                    break;
                case 'week':
                    sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 6);
                    this.dailyMinAndPerc(track, sumInInterval, 7);
                    this.timePeriod = 'daily average this week';
                    this.completed = ' this week';
                    this.dailyRecordedTimes = this.populateProgressBars(7);
                    break;
                case 'month':
                    sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 29);
                    this.dailyMinAndPerc(track, sumInInterval, 30);
                    this.timePeriod = 'daily average this month';
                    this.completed = ' this month';
                    this.dailyRecordedTimes = this.populateProgressBars(30);
                    this.isMonthView = true;
                    break;
                case 'year':
                    sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 364);
                    this.dailyMinAndPerc(track, sumInInterval, 365);
                    this.timePeriod = 'daily average this year';
                    this.completed = ' this year';
                    this.dailyRecordedTimes = this.populateProgressBars(365);
                    this.isYearView = true;
                    break;
            }
        }
        catch (error) {
            console.log('Changing time frame via checkbox is not working ' + error.message);
        }
    };
    /**
     *
     * @param time
     *
     * Take a date with format YYYY-MM-DD and reformat it to M/DD
     */
    AppOutputComponent.prototype.trimmedDate = function (time) {
        time = time.split('-');
        var trimmedDayDate = time[1];
        var trimmedMonthDate = time[2];
        if (trimmedDayDate.startsWith('0')) {
            trimmedDayDate = trimmedDayDate[1];
        }
        if (trimmedMonthDate.startsWith('0')) {
            trimmedMonthDate = trimmedMonthDate[1];
        }
        var trimmedDate = trimmedDayDate + '/' + trimmedMonthDate;
        return trimmedDate;
    };
    /**
     *
     * @param track
     * @param datePlaceholder
     *
     * This simply loops thru a track's dates property for matching dates provided from
     * the populateProgressBars function below and returns the time from that date.
     */
    AppOutputComponent.prototype.timeFinder = function (track, datePlaceholder) {
        var time;
        // loop thru selected track's dates property
        for (var i = 0; i < track['dates'].length; i++) {
            if (track['dates'][i].recordedDate === datePlaceholder) {
                time = track['dates'][i].recordedMinutes;
                time = time / 60;
                time = time.toFixed(1);
                return time;
            }
            else {
                time = 0;
            }
        }
        return time;
    };
    /**
     *
     * @param timeInterval
     *
     * Pass the number of date objects you want returned in a new progress bar array.
     * If time already exists inside the dates property of the track object for the
     * dates created in this function, they'll will added to the object with the appropriate
     * date. This func just returns date objects equal to the number of progress bars
     * you want created.
     */
    AppOutputComponent.prototype.populateProgressBars = function (timeInterval) {
        try {
            // find selected track
            var track = this.goalTrackService.findSelectedTrack();
            // create new array
            var progressArray = [];
            // create objects to populate new array (equal to number passed as arg)
            for (var i = 0; i < timeInterval; i++) {
                // create new date object for comparison
                var datePlaceholder = this.goalTrackService.dateOfNthDaysAgo(i);
                var progressBarObject = {
                    'date': this.trimmedDate(datePlaceholder),
                    'time': this.timeFinder(track, datePlaceholder)
                };
                progressArray.push(progressBarObject);
            }
            console.log(progressArray);
            return progressArray.reverse();
        }
        catch (error) {
            console.log('Unable to populate progress bar array ' + error.message);
        }
    };
    AppOutputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-app-output',
            template: __webpack_require__("../../../../../src/app/views/app-output/app-output.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/app-output/app-output.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_goal_track_service__["a" /* GoalTrackService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppOutputComponent);
    return AppOutputComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map