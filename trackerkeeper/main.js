(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _views_app_output_app_output_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/app-output/app-output.component */ "./src/app/views/app-output/app-output.component.ts");
/* harmony import */ var _views_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/app-list/app-list.component */ "./src/app/views/app-list/app-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_app_input_app_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/app-input/app-input.component */ "./src/app/views/app-input/app-input.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { AppCalendarComponent } from './views/app-calendar/app-calendar.component';


// import { AppNewComponent } from './views/app-new/app-new.component';




var routes = [
    { path: '', redirectTo: 'List Tracks', pathMatch: 'full' },
    // { path: 'New Track', component: AppNewComponent },
    { path: 'Input', component: _views_app_input_app_input_component__WEBPACK_IMPORTED_MODULE_4__["AppInputComponent"] },
    { path: 'Track Output', component: _views_app_output_app_output_component__WEBPACK_IMPORTED_MODULE_0__["AppOutputComponent"] },
    // { path: 'Calendar', component: AppCalendarComponent },
    { path: 'List Tracks', component: _views_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_1__["AppListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"]
                }
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#titleContainer {\n    position: relative;\n    margin-top: 1em;\n    background: #fff;\n}\n\nh1 {\n    color: #b06d06;\n    font-family: Arial, Helvetica, sans-serif;\n    margin: 0;\n}\n\nul {\n    padding-left: 0;\n}\n\n.trackList ul {\n    padding-left: 0;\n}\n\nli {\n    list-style: none;\n}\n\nnav {\n    position: fixed;\n        bottom: 0;\n        left: 50%;\n    width: 100%;\n    padding-top: 1em;\n    -webkit-transform: translatex(-50%);\n            transform: translatex(-50%);\n    max-width: 768px;\n    background: #fff;\n    z-index: 10;\n}\n\nnav a {\n    width: 33%;\n    display: inline-block;\n    text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"titleContainer\" [class.tkTitle]=\"tkTitle\">\n  <h1>{{ appTitle }}</h1>\n</div>\n<router-outlet></router-outlet>\n<nav>\n  <a routerLink=\"/Input\"><img src=\"./assets/input.svg\"></a>\n  <a routerLink=\"/Track Output\"><img src=\"./assets/charts.svg\"></a>\n  <a routerLink=\"/List Tracks\"><img src=\"./assets/list.svg\"></a>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_goal_track_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/services/goal-track.service */ "./src/app/services/goal-track.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(goalTrackService, router) {
        var _this = this;
        this.goalTrackService = goalTrackService;
        this.router = router;
        this.selected = true;
        // appTitle = 'TrackerKeeper';
        this.appTitle = 'TK3';
        this.router.events.subscribe(function (event) {
            try {
                if (event.url) {
                    if ((event.url === '/New%20Track') || (event.url === '/List%20Tracks')) {
                        // this.title = 'Tracker';
                        // this.time = 'Keeper';
                        _this.tkTitle = true;
                    }
                    else if ((event.url !== '/New%20Track') || (event.url !== '/List%20Tracks')) {
                        _this.track = _this.goalTrackService.track;
                        _this.title = (_this.track) ? _this.track['name'] : 'Tracker';
                        _this.time = (_this.track) ? _this.track['time'] + ' hrs' : 'Keeper';
                        _this.tkTitle = false;
                        if (_this.title === 'Tracker') {
                            _this.selected = false;
                        }
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
     * If there's no selected tracks (i.e., 0 tracks) go the list track view.
     */
    AppComponent.prototype.routeToNewView = function () {
        try {
            // const selectedTrack = this.goalTrackService.track;
            // if (!!selectedTrack && selectedTrack['name'] === 'null') {
            this.router.navigateByUrl('/List Tracks');
        }
        catch (error) {
            console.log('Unable to reroute to List Track view ' + error.message);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_services_goal_track_service__WEBPACK_IMPORTED_MODULE_1__["GoalTrackService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_goal_track_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/goal-track.service */ "./src/app/services/goal-track.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_app_input_app_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/app-input/app-input.component */ "./src/app/views/app-input/app-input.component.ts");
/* harmony import */ var _views_app_output_app_output_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/app-output/app-output.component */ "./src/app/views/app-output/app-output.component.ts");
/* harmony import */ var _views_app_calendar_app_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/app-calendar/app-calendar.component */ "./src/app/views/app-calendar/app-calendar.component.ts");
/* harmony import */ var _views_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/app-list/app-list.component */ "./src/app/views/app-list/app-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _views_app_input_app_input_component__WEBPACK_IMPORTED_MODULE_4__["AppInputComponent"],
                _views_app_output_app_output_component__WEBPACK_IMPORTED_MODULE_5__["AppOutputComponent"],
                _views_app_calendar_app_calendar_component__WEBPACK_IMPORTED_MODULE_6__["AppCalendarComponent"],
                _views_app_list_app_list_component__WEBPACK_IMPORTED_MODULE_7__["AppListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [
                _services_goal_track_service__WEBPACK_IMPORTED_MODULE_0__["GoalTrackService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/goal-track.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/goal-track.service.ts ***!
  \************************************************/
/*! exports provided: GoalTrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalTrackService", function() { return GoalTrackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoalTrackService = /** @class */ (function () {
    function GoalTrackService() {
        var _this = this;
        this.trackToEdit = '';
        this.oneDay = 86400000;
        this.count = 2;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.findSelectedTrack().subscribe(function (track) {
            _this.track = track;
            return track;
        });
        // The Track object needs to be initialized with values
        this.example = {
            dates: [],
            name: 'new track ',
            selected: true,
            time: 0,
            editName: false,
            editTime: false
        };
    }
    /**
     *
     * @param time: string | number
     *
     * Remove leading 0 and convert string to number.
     */
    GoalTrackService.prototype.convertToNumber = function (time) {
        var convertedTime = parseInt(time, 10);
        return convertedTime;
    };
    /**
     *
     * @param date string
     * @param day number | string
     * @param time string
     *
     * This method is called when clicking on a calendar data cell.
     *
     * Takes an actual formatted year/month/day date string, a day
     * that represents the number of the day in that month, and the
     * time entered when you click on a calendar cell.
     */
    GoalTrackService.prototype.updateTrackTimeInStorage = function (date, day, time) {
        var convertedTime = this.convertToNumber(time);
        var isTimeValid = this.timeCheck(convertedTime);
        if (isTimeValid && day !== '') {
            if (this.track['dates'].length > 0) {
                for (var i = 0; i < this.track['dates'].length; i++) {
                    var recordedEntry = this.track['dates'][i];
                    if (date === recordedEntry.recordedDate) {
                        this.track['dates'][i].recordedMinutes = convertedTime;
                        break;
                    }
                    else if (i === this.track['dates'].length - 1) {
                        var timeObject = {
                            recordedMinutes: convertedTime,
                            recordedDate: date
                        };
                        this.track['dates'].push(timeObject);
                    }
                }
            }
            else {
                var timeObject = {
                    recordedMinutes: convertedTime,
                    recordedDate: date
                };
                this.track['dates'].push(timeObject);
            }
            this.track['dates'].sort(this.compareFunction);
            localStorage.setItem(this.track['name'], JSON.stringify(this.track));
        }
    };
    GoalTrackService.prototype.getAllTracks = function () {
        try {
            var tracks = [];
            for (var i = 0; i < localStorage.length; i++) {
                var track = localStorage.getItem(localStorage.key(i));
                track = JSON.parse(track);
                tracks.push(track);
            }
            return tracks;
        }
        catch (error) {
            console.log('Unable to retrive tracks list. ' + error.message);
        }
    };
    // Returns the current selected track
    GoalTrackService.prototype.findSelectedTrack = function () {
        try {
            for (var i = 0; i < localStorage.length; i++) {
                var track = localStorage.getItem(localStorage.key(i));
                track = JSON.parse(track);
                if (track['selected'] === true) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(track);
                }
            }
            // If there's no selected tracks
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
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
            return;
        }
    };
    /**
    * Check to see if user is inputting time in hours.
    * We declare these as lets instead of class properties cuz they aren't
    * loaded in time for Angular to find them in the DOM otherwise.
    */
    GoalTrackService.prototype.minutesOrHours = function (hours, minutes) {
        if (hours === true && minutes <= 24) {
            return minutes * 60;
        }
        else if (hours === false && minutes <= 1440) {
            return minutes;
        }
        else {
            return;
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
    // Create a string from a Date object with today's date, format YYYY-MM-DD
    GoalTrackService.prototype.createDateObject = function (date) {
        var dateObj = date ? date : new Date();
        var month = dateObj.getMonth() + 1; // getMonth is 0-based
        if (month < 10) {
            month = '0' + month;
        }
        var day = dateObj.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        var year = dateObj.getFullYear();
        var newDate = year + '-' + month + '-' + day;
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
            newDate.setDate(newDate.getDate() - daysAgo);
            var nthDaysAgo = newDate.getDate();
            if (nthDaysAgo < 10) {
                nthDaysAgo = '0' + nthDaysAgo;
            }
            var monthMinusNthDaysAgo = newDate.getMonth() + 1;
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
     * @param trackName
     * @param startTime
     * @param endTime
     *
     * The startTime is the number of days from today to begin the maths and the endTime is number of days from today
     * to end the maths.
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
            console.log('Can\'t find sum in time interval provided for ' + trackName + ' track ' + error.message);
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
            // First, is this a new(er) track? If so, there may not be enough data
            var today = new Date();
            this.verifyNewerTrackInfo();
            var track = this.findTrackByName(trackName);
            var timeGoal = (track['time'] !== 0) ? track['time'] : 0;
            var percent = (sum > 0 && timeGoal > 0) ? (sum / timeGoal) * 100 : 0;
            var dailyPercent = (percent === 0 || interval === 0) ? 0 : percent / interval;
            return dailyPercent;
        }
        catch (error) {
            console.log('Can\'t find daily percentage from ' + trackName + ', ' + sum + ' & ' + interval + '. ' + error.message);
        }
    };
    /**
     *
     * @param trackName string
     * @param sum string
     *
     * Pass a track name and sum to find the overall percentage of the track completed.
     */
    GoalTrackService.prototype.percentOfEntireGoal = function (trackName, sum) {
        try {
            var track = this.findTrackByName(trackName);
            var timeGoal = track['time'] * 60;
            var percent = (sum > 0 && timeGoal > 0) ? (sum / timeGoal) * 100 : 0;
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
            var sum = 0;
            for (var i = 0; i < track['dates'].length; i++) {
                sum += Number(track['dates'][i].recordedMinutes);
            }
            var percentage = track['time'] > 0 ? (sum / (track['time'] * 60)) * 100 : 0;
            if (percentage > 0) {
                return percentage.toFixed(2);
            }
            else {
                return 0;
            }
        }
        catch (error) {
            console.log('Currently there\'s no selected track. ' + error.message);
        }
    };
    /**
     *
     * @param track
     *
     * Takes a track object and prompts a user for an email address
     * to send the track data (dates & times entered).
     */
    GoalTrackService.prototype.exportTrackData = function (track) {
        var email = prompt('Provide an email address to send this data to.');
        // Was email address provided?
        if (email === null || email === '' || !email) {
            return false;
        }
        else {
            var trackData = this.formatTrackData(track);
            window.location.href = 'mailto:' + email + '?subject=' + track.name + ' Data&body=' + trackData + '';
        }
    };
    /**
     *
     * @param trackName
     *
     * Get the track minutes and export them in an easy to read JSON file.
     */
    GoalTrackService.prototype.formatTrackData = function (track) {
        var trackDataOutput = 'Track name = ' + track.name + '%0D%0A%0D%0A';
        var selectedTrack = localStorage.getItem(track.name);
        var parsedTrack = JSON.parse(selectedTrack);
        var trackDates = parsedTrack['dates'];
        trackDates.sort(this.compareFunction);
        for (var i = 0; i < trackDates.length; i++) {
            var trackDataString = '';
            // Grab 2 entries for date comparison
            var item1 = parsedTrack['dates'][i - 1];
            item1 = item1 ? new Date(item1.recordedDate.replace('-', '/')) : null;
            var item2 = parsedTrack['dates'][i];
            item2 = item2 ? new Date(item2.recordedDate.replace('-', '/')) : null;
            var itemDate = void 0;
            var itemTime = void 0;
            /**
             * Compute how many days are in between entries. If there are any
             * gaps, create placeholder date objects with 0 minutes to fill them.
             * This is so the emailed dates are sequential and there are no
             * missing dates (makes it easier to average out times later).
            */
            var numberOfDays = (item2 - item1) / this.oneDay;
            if ((item1 && item2) && (numberOfDays)) {
                for (var j = numberOfDays - 1; j > 0; j--) {
                    var timePeriod = this.oneDay * j;
                    var adjustedTime = item2 - timePeriod;
                    var placeHolder = new Date(adjustedTime);
                    itemDate = this.createDateObject(placeHolder);
                    itemTime = '0';
                    trackDataString += itemDate + ' = ' + itemTime + '%0D%0A';
                }
                itemDate = parsedTrack['dates'][i]['recordedDate'];
                itemTime = parsedTrack['dates'][i]['recordedMinutes'];
            }
            else {
                itemDate = parsedTrack['dates'][i]['recordedDate'];
                itemTime = parsedTrack['dates'][i]['recordedMinutes'];
            }
            trackDataString += itemDate + ' = ' + itemTime + '%0D%0A';
            trackDataOutput += trackDataString;
        }
        trackDataOutput += '%0D%0A' + selectedTrack;
        return trackDataOutput;
    };
    /**
     *
     * @param first
     * @param second
     *
     * Sort track entries by date. First, these need to have hyphens
     * removed so we can properly parse them and then compare.
     */
    GoalTrackService.prototype.compareFunction = function (first, second) {
        var firstString = first.recordedDate.replace(/-/g, '');
        var secondString = second.recordedDate.replace(/-/g, '');
        return (parseInt(firstString, 10) - parseInt(secondString, 10));
    };
    /**
     * Creates a new track, and updates localStorage to reflect the change.
     *
     * @param name: string
     * @param time: number
     */
    GoalTrackService.prototype.createNewTrack = function () {
        var tracks = this.getAllTracks();
        var newTrackName = 'new track ';
        // FYI -- .indexOf is a older/clunkier (ES5) version of .includes()
        var newTrackArray = tracks.filter(function (item) {
            return item.name.includes(newTrackName);
        });
        var newestTrack;
        if (newTrackArray.length > 0) {
            newestTrack = newTrackArray.pop();
        }
        // .match() returns an array matching the regex; in this case, any numbers
        var number = newestTrack ? newestTrack.name.match(/\d/g) : null;
        // Is there a number in the track name?
        if (newestTrack && number) {
            // .join returns a string from the number array
            number = number.join("");
            // Get the number from the string
            number = parseInt(number, 10);
        }
        // If there's a number in the track name, iterate the number, else just create a 'new track'
        if (number || newestTrack) {
            this.example.name = 'new track ' + (number + 1);
        }
        else {
            this.example.name = 'new track ';
        }
        localStorage.setItem(this.example.name, JSON.stringify(this.example));
        this.event.emit(this.example.name);
    };
    /**
     *
     * Loop thru tracks from localstorage and turn the selected key
     * for the track clicked to true
     */
    GoalTrackService.prototype.makeSelectedTrack = function (track) {
        try {
            this.track = track;
            this.deselectTracks();
            for (var i = 0; i < localStorage.length; i++) {
                var storedTrack = localStorage.getItem(localStorage.key(i));
                storedTrack = JSON.parse(storedTrack);
                if (storedTrack['name'] === track.name) {
                    storedTrack['selected'] = true;
                    localStorage.setItem(storedTrack['name'], JSON.stringify(storedTrack));
                    // this.findSelectedTrack();
                }
            }
        }
        catch (error) {
            console.log('Could not change selected track ' + error.message);
        }
    };
    /**
     *
     * @param track
     */
    GoalTrackService.prototype.deleteTrack = function (track) {
        localStorage.removeItem(track.name);
    };
    GoalTrackService.prototype.verifyNewerTrackInfo = function () {
        // Typed as 'any' for the subtraction below
        var todaysDate = new Date();
        var dates = [];
        // find first date in storage
        this.track.dates.forEach(function (element) {
            dates.push(element);
        });
        var convertedDate = dates[0] ? dates[0].recordedDate : null;
        convertedDate = convertedDate ? new Date(convertedDate.replace('-', '/')) : null;
        var timeInBetween = Math.floor((todaysDate - convertedDate) / this.oneDay);
        // Reduce lets you sum an array (dates is an array of objects)
        var times = dates.reduce(function (a, b) {
            return a + b.recordedMinutes;
        }, 0);
        var avgOverTimeSpan = Math.floor(times / timeInBetween);
        console.log(avgOverTimeSpan + ' ' + timeInBetween);
        return [avgOverTimeSpan, timeInBetween];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GoalTrackService.prototype, "event", void 0);
    GoalTrackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GoalTrackService);
    return GoalTrackService;
}());



/***/ }),

/***/ "./src/app/views/app-calendar/app-calendar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/views/app-calendar/app-calendar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    position: relative;\n    width: 100%;\n}\n\ntr {\n    text-align: center;\n    height: 3rem;\n}\n\nthead,\ntd {\n    position: relative;\n}\n\n.arrow {\n    position: absolute;\n    height: 10px;\n    width: 10px;\n    top: 8px;\n    border-top: solid 5px #444;\n    border-left: solid 5px #444;\n    z-index: 1;\n}\n\n.arrow.left {\n    left: 10px;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n.arrow.right {\n    right: 10px;\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n}\n\nlabel[class^=\"timeStamp\"] {\n    font-size: 8px;\n    color: red;\n    position: absolute;\n        left: 75%;\n}\n\ntd input {\n    position: absolute;\n    left: 75%;\n    top: 25%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    text-align: center;\n    width: 4em;\n    opacity: .7;\n}\n\n.hours-button {\n    display: block;\n    text-align: right;\n}\n"

/***/ }),

/***/ "./src/app/views/app-calendar/app-calendar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/app-calendar/app-calendar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" (click)=\"onContainerClicked($event)\" class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n[ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n<label class=\"hours-button\" for=\"hours\">Hours\n    <input type=\"checkbox\" \n        name=\"hours\" \n        id=\"hours\" \n        (click)=\"changeTimeFrame(!hours); hours = !hours\">\n  </label>\n  <table class=\"\" cols=\"7\" cellpadding=\"0\" cellspacing=\"0\">\n    <thead>\n      <tr>\n        <th colspan=\"7\"><span class=\"arrow left\" (click)=\"prevMonth()\"></span> {{ displayMonth }} {{ displayYear }}<span class=\"arrow right\" (click)=\"nextMonth()\"></span></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n          <td *ngFor=\"let day of weekdays\">{{ day }}</td>\n      </tr>\n      <tr *ngFor=\"let week of month.weeks\"> \n          <td *ngFor=\"let day of week\" \n              class=\"{{ checkForToday(day.date) }}\" \n              id=\"date-{{ curYear }}-{{ formatSingleDigitValues(monthToDisplay + 1) }}-{{ formatSingleDigitValues(day.date) }}\"\n              (click)=\"editDateEntryTime(day)\"\n              >{{ day.date }}\n            <label *ngIf=\"!day.edit\" \n                   class=\"timeStamp-{{ day.date }}\">{{ day.minutes > 0 ? day.minutes : '' }}\n            </label>\n            <input *ngIf=\"day.edit\" \n                   (blur)=\"updateStorage(curYear + '-' + formatSingleDigitValues(monthToDisplay + 1) + '-' + formatSingleDigitValues(day.date), day, time.value)\" \n                   (keypress)=\"updateTime($event, curYear + '-' + formatSingleDigitValues(monthToDisplay + 1) + '-' + formatSingleDigitValues(day.date), day, time.value)\"\n                   tabindex=\"0\" \n                   type=\"text\" \n                   value=\"{{ day.minutes ? day.minutes : 0 }}\" \n                   #time>\n          </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/app-calendar/app-calendar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/app-calendar/app-calendar.component.ts ***!
  \**************************************************************/
/*! exports provided: AppCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCalendarComponent", function() { return AppCalendarComponent; });
/* harmony import */ var _services_goal_track_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/goal-track.service */ "./src/app/services/goal-track.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppCalendarComponent = /** @class */ (function () {
    function AppCalendarComponent(elementRef, goalTrackService) {
        this.elementRef = elementRef;
        this.goalTrackService = goalTrackService;
        this.todayDate = new Date();
        this.weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.month = {
            index: '',
            weeks: []
        };
        this.curYear = this.todayDate.getFullYear();
        this.hours = false;
        // Used in main calendar build method
        this.weeks = [];
        this.tableRows = [];
        this.lastDayOfMonths = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.visible = false;
        this.visibleAnimate = false;
        this.state = 'Open';
        this.curMonth = this.todayDate.getMonth() + 1;
        this.twelveMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December'];
        this.newMonthDate = new Date(this.curYear, this.curMonth - 1, 1);
        this.scanForToday = (this.curYear === this.todayDate.getFullYear() && this.curMonth === this.todayDate.getMonth() + 1) ?
            this.todayDate.getDate() : 0;
        this.count = 0;
        this.edit = true;
    }
    AppCalendarComponent.prototype.ngOnInit = function () {
        this.track = this.goalTrackService.track;
        this.determineWeekdayThatMonthStartsOn();
        this.monthAndYearOnDisplay();
        this.buildCal();
    };
    /**
     * The logic contained in this lifecycle hook is related
     * to adding instant focus to an input field when its
     * label is clicked. We replace the label with an input
     * field for editing but since the input field had not
     * existed before it was difficult to add focus.
     */
    AppCalendarComponent.prototype.ngAfterViewChecked = function () {
        this.focusedTimeInput = this.focusedTime;
        if (this.focusedTimeInput.first) {
            this.focusedTimeInput.first.nativeElement.focus();
        }
    };
    /**
     *
     * @param year
     * @param month
     *
     * This determines what cell in first row the month starts on (1-7).
     */
    AppCalendarComponent.prototype.determineWeekdayThatMonthStartsOn = function (year, month) {
        if (year === void 0) { year = this.curYear; }
        if (month === void 0) { month = this.curMonth; }
        // Get first day of month as a new date object.
        var newMonthDate = new Date(year, month - 1, 1);
        // Get the day (1-7) that the first day of the month starts on.
        this.weekdayThatMonthStartsOn = newMonthDate.getDay() + 1;
    };
    /**
     *
     * @param yearIndex
     * @param monthIndex
     *
     * Determines what strings to show in the template.
     */
    AppCalendarComponent.prototype.monthAndYearOnDisplay = function (yearIndex, monthIndex) {
        if (yearIndex === void 0) { yearIndex = 0; }
        if (monthIndex === void 0) { monthIndex = 1; }
        this.displayMonth = this.twelveMonths[this.curMonth - monthIndex];
        this.displayYear = this.curYear - yearIndex;
    };
    /**
     * Yep, just calculate the # of days in February for the year in question.
     */
    AppCalendarComponent.prototype.calcDaysInFeb = function () {
        return this.lastDayOfMonths[1] =
            (((this.newMonthDate.getFullYear() % 100 !== 0)
                && (this.newMonthDate.getFullYear() % 4 === 0))
                || (this.newMonthDate.getFullYear() % 400 === 0)) ? 29 : 28;
    };
    /**
     *
     * @param day
     *
     * Just lookin' for the td in the calendar that matches today's date.
     */
    AppCalendarComponent.prototype.checkForToday = function (day) {
        if (day === this.scanForToday) {
            return 'today';
        }
        else {
            return 'days';
        }
    };
    /**
     * If the date is under 10 then add a 0 for proper date formatting.
     * This method is used in the template multiple times and is not
     * great for optimiation/efficiency.
     */
    AppCalendarComponent.prototype.formatSingleDigitValues = function (value) {
        if (value > 0 && value < 10) {
            value = '0' + value;
        }
        else if (value < 1) {
            value = '00';
        }
        return value;
    };
    /**
     *
     * @param monthIndex number;
     *
     * This builds the flippin calendar. Its one parameter is used
     * when cycling between months.
     */
    AppCalendarComponent.prototype.buildCal = function (monthIndex) {
        if (monthIndex === void 0) { monthIndex = 1; }
        try {
            this.calcDaysInFeb();
            this.monthToDisplay = this.curMonth - monthIndex;
            this.month.index = this.monthToDisplay;
            this.weeks = [];
            for (var i = 1; i <= 42; i++) {
                var firstDay = ((i - this.weekdayThatMonthStartsOn >= 0)
                    && (i - this.weekdayThatMonthStartsOn < this.lastDayOfMonths[this.monthToDisplay]))
                    ? i - this.weekdayThatMonthStartsOn + 1 : '';
                this.day = {
                    date: firstDay,
                    minutes: this.apiToPopCalWithTime(firstDay, this.monthToDisplay + 1) ?
                        this.apiToPopCalWithTime(firstDay, this.monthToDisplay + 1) : 0,
                    edit: false
                };
                // We push seven items at a time.
                this.weeks.push(this.day);
                // If the index is divisible by 7 then it's a week and we add another
                // week array to the month. Then, we clear out our weeks array.
                if ((i % 7 === 0)) {
                    this.tableRows.push(i);
                    this.month.weeks.push(this.weeks);
                    this.weeks = [];
                }
            }
        }
        catch (error) {
            console.log('Unable to build calendar ' + error.message);
        }
    };
    /**
     * Cleans the slate for building a new month.
     */
    AppCalendarComponent.prototype.resetAndChecks = function () {
        this.month.index = '';
        this.month.weeks = [];
        this.tableRows = [];
        this.checkForYearRollover(this.curMonth, this.count);
        this.determineWeekdayThatMonthStartsOn(this.curYear, this.curMonth - this.count);
    };
    // Last month
    AppCalendarComponent.prototype.prevMonth = function () {
        this.count++;
        this.resetAndChecks();
        this.monthAndYearOnDisplay(0, this.count + 1);
        this.buildCal(this.count + 1);
    };
    // Next month
    AppCalendarComponent.prototype.nextMonth = function () {
        this.count--;
        this.resetAndChecks();
        // Account for 0-based index error for setting months.
        this.adjustedCount = (this.count === -1) ? this.adjustedCount = 0 : this.adjustedCount = this.count + 1;
        this.monthAndYearOnDisplay(0, this.adjustedCount);
        this.buildCal(this.adjustedCount);
    };
    /**
     *
     * @param month
     * @param count
     *
     * When moving forward/backwards thru months, determine if we're
     * in another year -- last year/next year, etc.
     */
    AppCalendarComponent.prototype.checkForYearRollover = function (month, count) {
        if (month - count > 12) {
            this.curYear++;
            this.curMonth = 1;
            this.count = 0;
        }
        else if (month - count < 1) {
            this.curYear--;
            this.curMonth = 12;
            this.count = 0;
        }
    };
    /**
     *
     * @param day
     * @param month
     *
     * This guy hooks into the local storage object. Pass a day and month
     * to it to build the proper days/weeks/month.
     */
    AppCalendarComponent.prototype.apiToPopCalWithTime = function (day, month) {
        var compareDate = this.curYear + '-' + this.formatSingleDigitValues(month) + '-' + this.formatSingleDigitValues(day);
        for (var i = 0; i < this.track['dates'].length; i++) {
            var recordedDate = this.track['dates'][i].recordedDate;
            var recordedMinutes = this.track['dates'][i].recordedMinutes;
            if (compareDate === recordedDate) {
                return recordedMinutes;
            }
        }
    };
    /**
     *
     * @param date string
     * @param day number
     * @param time string
     *
     * This method is called when clicking on a calendar data cell.
     *
     * Takes an actual formatted year/month/day date string, a day
     * that represents the number of the day in that month, and the
     * time entered when you click on a calendar cell.
     */
    AppCalendarComponent.prototype.updateStorage = function (date, day, time) {
        var minutes = this.goalTrackService.minutesOrHours(this.hours, time);
        if (minutes) {
            this.goalTrackService.updateTrackTimeInStorage(date, day, minutes);
            day.minutes = time;
            day.edit = false;
        }
    };
    /**
   *
   * @param event
   * @param date
   * @param day
   * @param time
   *
   * On Enter key presses, update storage.
   */
    AppCalendarComponent.prototype.updateTime = function (event, date, day, time) {
        if (event.keyCode === 13) {
            this.updateStorage(date, day, time);
        }
    };
    /** CALENDAR TOGGLE LOGIC */
    /**
     *
     * @param toggle
     *
     * Toggle the calendar open/close.
     */
    AppCalendarComponent.prototype.showOrHide = function (toggle) {
        var _this = this;
        if (toggle) {
            this.visible = true;
            setTimeout(function () { return _this.visibleAnimate = true; }, 100);
            this.state = 'Close';
        }
        else {
            this.visibleAnimate = false;
            setTimeout(function () { return _this.visible = false; }, 300);
            this.state = 'Open';
        }
    };
    /**
     *
     * @param event
     *
     * Listen for modal clicks.
     */
    AppCalendarComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal')) {
            this.showOrHide(false);
        }
    };
    /**
     *
     * @param day
     *
     * Show the input field on the the clicked calendar cell.
     */
    AppCalendarComponent.prototype.editDateEntryTime = function (day) {
        if (day.date !== '') {
            for (var i = 0; i < this.month.weeks.length; i++) {
                for (var j = 0; j < this.month.weeks[i].length; j++) {
                    this.month.weeks[i][j].edit = false;
                }
            }
            day.edit = true;
        }
    };
    /**
     *
     * @param hours
     *
     * All we're doing here is converting the time displayed in the
     * cal from min to hrs & vice versa. Hours is a boolean set by
     * selecting a checkbox.
     */
    AppCalendarComponent.prototype.changeTimeFrame = function (hours) {
        this.month.weeks.forEach(function (element) {
            element.forEach(function (item) {
                if (item.minutes > 0 && hours) {
                    item.minutes = item.minutes / 60;
                }
                else {
                    item.minutes = item.minutes * 60;
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('time'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppCalendarComponent.prototype, "focusedTime", void 0);
    AppCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./app-calendar.component.html */ "./src/app/views/app-calendar/app-calendar.component.html"),
            styles: [__webpack_require__(/*! ./app-calendar.component.css */ "./src/app/views/app-calendar/app-calendar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _services_goal_track_service__WEBPACK_IMPORTED_MODULE_0__["GoalTrackService"]])
    ], AppCalendarComponent);
    return AppCalendarComponent;
}());



/***/ }),

/***/ "./src/app/views/app-input/app-input.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/app-input/app-input.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".controls img {\n    vertical-align: super;\n}\n\nform div {\n    display: flex;\n}\n\nform div > input {\n    border: #ddd solid 3px;\n    padding: 1em;\n    flex: 4;\n    border-radius: 0;\n    border-top: #ddd solid 1px;\n}\n\nform label {\n    padding-left: 1em;\n}\n\n.manual-input {\n    position: absolute;\n        top: 6em;\n    opacity: 0;\n    pointer-events: none;\n}\n\n.manual-input.active {\n    opacity: 1;\n    pointer-events: initial;\n}\n\n.manual-input h3 {\n    margin-top: 0;\n}\n\nbutton {\n    display: block;\n    margin-top: 2em;\n    padding: 1em;\n}\n"

/***/ }),

/***/ "./src/app/views/app-input/app-input.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/app-input/app-input.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-view sub-header\">\n    <h2>Active: {{ track.name }}</h2>\n    <div class=\"controls\">\n        <p>{{ modal.state }} calendar </p>\n        <img class=\"cal-button\" (click)=\"modal.showOrHide(toggle); toggle = !toggle\" src=\"./assets/calendar.svg\"/>\n    </div>\n</div>\n<app-calendar #modal></app-calendar>\n<div *ngIf=\"!noTracks\" class=\"manual-input\" [class.active]=\"modal.state === 'Open'\"> \n  <form>\n    <h3>Enter today's time below. Select the calendar icon to add or adjust time for previous dates.</h3>\n    <div>\n      <input type=\"tel\" \n            name=\"minutes\" \n            id=\"minutes\" \n            [(ngModel)]=\"minutes\" \n            placeholder=\"Enter {{ hoursOrMinutes }}\" \n            autocomplete=\"off\" \n            min=\"0\" \n            max=\"1440\">\n      <label for=\"hours\">Hours\n        <input type=\"checkbox\" \n            name=\"hours\" \n            id=\"hours\" \n            (change)=\"hours = !hours\">\n      </label>\n    </div>\n    <button (click)='addMinutes(minutes)'>Submit</button>\n  </form>\n  <div *ngIf=\"routeFromCal\">\n    <p>Pressing submit will overwrite the <strong>{{ minutesAlreadyEntered }} {{ increment }}</strong> you've already entered for <strong>{{ routeFromCal }}</strong>.</p>\n  </div>\n</div>\n<div *ngIf=\"noTracks\"><h3>Currently there are zero tracks selected. Please select a track or create a new one.</h3></div>\n"

/***/ }),

/***/ "./src/app/views/app-input/app-input.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/app-input/app-input.component.ts ***!
  \********************************************************/
/*! exports provided: AppInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInputComponent", function() { return AppInputComponent; });
/* harmony import */ var _services_goal_track_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/goal-track.service */ "./src/app/services/goal-track.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppInputComponent = /** @class */ (function () {
    function AppInputComponent(goalTrackService, router) {
        this.goalTrackService = goalTrackService;
        this.router = router;
        this.noTracks = false;
        this.toggle = true;
        this.hours = false;
        this.track = this.goalTrackService.track;
    }
    AppInputComponent.prototype.ngOnInit = function () { };
    AppInputComponent.prototype.disableRouteTrigger = function () {
        this.minutesAlreadyEntered = '';
    };
    // Have previous times been entered for the date being checked?
    AppInputComponent.prototype.sameDateCheck = function () {
        for (var i = 0; i < this.track['dates'].length; i++) {
            if (this.track['dates'][i].recordedDate === this.timeObject.recordedDate) {
                var oldMinutes = this.track['dates'][i].recordedMinutes;
                var newMinutes = this.timeObject.recordedMinutes;
                this.track['dates'][i].recordedMinutes = +oldMinutes + +newMinutes;
                return;
            }
        }
        this.track['dates'].push(this.timeObject);
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
                if (this.track['dates'].length >= 1) {
                    // Check for same date entries
                    this.sameDateCheck();
                }
                else {
                    this.track['dates'].push(this.timeObject);
                }
                return true;
            }
            else {
                alert('Please enter an actual amount of time, dummy.');
                return false;
            }
        }
        catch (error) {
            console.log('Minutes & dates validation failed ' + error.message);
        }
    };
    // Adds minutes to local storage for submit button clicks
    AppInputComponent.prototype.addMinutes = function () {
        try {
            // Check if minutes or hours
            this.minutes = this.goalTrackService.minutesOrHours(this.hours, this.minutes);
            // Create new time object for the dates array
            this.setTimeObject(this.goalTrackService.createDateObject());
            // Check if min > 0 and if there are prev. date entries in dates array
            var timeCheck = this.checkForValidMinAndDate();
            if (timeCheck) {
                localStorage.setItem(this.track['name'], JSON.stringify(this.track));
                this.minutes = null;
                this.router.navigateByUrl('/Track Output');
            }
        }
        catch (error) {
            console.log('Dates array is unavailable ' + error.message);
        }
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
            alert('Overwrite the ' + this.minutesAlreadyEntered
                + ' ' + this.increment + ' you already have saved for ' + this.routeFromCal + '?');
            for (var i = 0; i < this.track['dates'].length; i++) {
                var storeDate = this.track['dates'][i].recordedDate;
                var storeTime = this.track['dates'][i].recordedMinutes;
                if (routeFromCal === storeDate) {
                    this.track['dates'][i].recordedMinutes = +this.minutes;
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
    AppInputComponent.prototype.openCal = function () {
        console.log('open calendar.');
    };
    AppInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-input',
            template: __webpack_require__(/*! ./app-input.component.html */ "./src/app/views/app-input/app-input.component.html"),
            styles: [__webpack_require__(/*! ./app-input.component.css */ "./src/app/views/app-input/app-input.component.css")]
        }),
        __metadata("design:paramtypes", [_services_goal_track_service__WEBPACK_IMPORTED_MODULE_0__["GoalTrackService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppInputComponent);
    return AppInputComponent;
}());



/***/ }),

/***/ "./src/app/views/app-list/app-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/app-list/app-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trackList {\n    width: 100%;\n    padding-bottom: 3em;\n}\n\nul {\n    list-style: none;\n    padding: 0;\n}\n\nli {\n    padding-bottom: 20px;\n    position: relative;\n    border: 5px solid #ddd;\n    padding: 10px;\n    margin-bottom: 20px;\n    background: #fff;\n}\n\nli a {\n    text-decoration: none;\n    display: block;\n    position: relative;\n    padding: 1em 1em 2em;\n}\n\n.hasTracks h2 {\n    color: #b06d06;\n    pointer-events: none;\n}\n\n.hasTracks h2:first-of-type {\n    font-size: 2em;\n    opacity: .4;\n    margin: 0;\n    text-align: left;\n}\n\n.hasTracks h2:last-of-type {\n    position: absolute;\n    bottom: .5em;\n    right: 1em;\n    margin: 0;\n}\n\nspan {\n    display: inline-block;\n    width: 32%;\n}\n\na span.percent {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: .25em;\n    color: #000;\n}\n\n.noTracks h2 {\n    color: #000;\n    font-size: 1.5em;\n}\n\n.track-wrapper {\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.track-wrapper div:first-child,\n.track-wrapper div:last-child {\n    flex: 1;\n}\n\n.track-details {\n    flex: 3;\n    padding-left: 1em;\n}\n\n.buttons-wrapper {\n    display: inline-block;\n}\n\n.buttons-wrapper button {\n    display: block;\n    width: 100%;\n    white-space: nowrap; \n}\n\n/* .disabled {\n    pointer-events: none;\n} */"

/***/ }),

/***/ "./src/app/views/app-list/app-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/app-list/app-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-view sub-header\">\n    <h2>Active: {{ track?.name }}</h2>\n    <div class=\"controls\">\n        <p>Create new</p>\n        <img class=\"add-button\" (click)=\"createNew()\" src=\"./assets/new.svg\"/>\n    </div>\n</div>\n<div *ngIf=\"!noTracks\" class=\"trackList\">\n    <ul>\n        <li *ngFor=\"let track of tracks; let i = index;\" \n            class=\"track-{{i}}\"\n            [class.disabled]=\"disabled\"\n            (click)=\"makeSelectedTrack(track)\"\n            [routerLink]=\"!disabled ? ['/Track Output'] : null\"\n            >\n            <!-- <a href=\"/Input\" [routerLink]=\"['/Input']\" id=\"trackWrapper\" (click)=\"makeSelectedTrack($event)\"> -->\n            <div class=\"track-wrapper\">\n                <div>\n                    <span class=\"percent\">{{ findPercentCompleted(track) }}%<br>done</span>\n                </div>\n                <div class=\"track-details\">\n                    <div>\n                        <label *ngIf=\"!track.editName\" \n                            (click)=\"editTrackDetails(track, 'name')\" \n                            name=\"name\">{{ track.name }}</label>\n                        <input *ngIf=\"track.editName\" \n                            (blur)=\"track.editName = false; updateTrackName($event, track, name.value)\"\n                            (keyup)=\"updateName($event, track, name.value)\"\n                            class=\"name\"\n                            value=\"{{ track.name }}\" \n                            type=\"text\" \n                            name=\"name\" \n                            pattern=\"[a-zA-Z\\s]+\"\n                            autofocus #name>\n                    </div>\n                    <div>\n                        <label *ngIf=\"!track.editTime\" \n                            (click)=\"editTrackDetails(track, 'time')\" \n                            name=\"time\">{{ track?.time }} hours</label>\n                        <input *ngIf=\"track.editTime\" \n                            (blur)=\"track.editTime = false; updateTrackTime(track, time.value)\" \n                            (keypress)=\"updateTime($event, track, time.value)\"\n                            class=\"time\"\n                            value=\"{{ track?.time }}\" \n                            type=\"text\" \n                            name=\"time\" \n                            pattern=\"/^\\d*\\.?\\d*$/\"\n                            autofocus #time>\n                    </div>\n                </div>\n                <div class=\"buttons-wrapper\">\n                    <!-- <button type=\"button\" id=\"edit\" class=\"listButtons\" (click)=\"makeSelectedTrack(track)\" [routerLink]=\"['/Input']\">add time</button> -->\n                    <button type=\"button\" id=\"delete\" class=\"listButtons\" (click)=\"deleteTrack(track)\">delete</button>\n                    <button type=\"button\" id=\"delete\" class=\"listButtons\" (click)=\"exportTrackData(track)\">export</button> \n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n<!-- <div *ngIf=\"noTracks\" [class.noTracks]=\"noTracks\" >\n    <h2>Currently there are zero tracks selected. Please select a track or create a new one.</h2>\n</div> -->\n<div *ngIf=\"noTracks\" [class.noTracks]=\"noTracks\" >\n    <h3>Click the plus sign (+) to get started.</h3>\n</div>"

/***/ }),

/***/ "./src/app/views/app-list/app-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/app-list/app-list.component.ts ***!
  \******************************************************/
/*! exports provided: AppListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppListComponent", function() { return AppListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_goal_track_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/goal-track.service */ "./src/app/services/goal-track.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Router } from '@angular/router';


var AppListComponent = /** @class */ (function () {
    // private nameVetted;
    function AppListComponent(goalTrackService) {
        this.goalTrackService = goalTrackService;
        this.noTracks = false;
        this.nameSelected = false;
        this.timeSelected = false;
        this.disabled = false;
    }
    AppListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.track = this.goalTrackService.track;
        this.tracks = this.goalTrackService.getAllTracks();
        if (this.tracks.length === 0) {
            this.noTracks = true;
        }
        this.receiver = this.goalTrackService.event;
        this.receiver.subscribe(function () {
            _this.noTracks = true;
        });
    };
    /**
     * The logic contained in this lifecycle hook is related
     * to adding instant focus to an input field when its
     * label is clicked. We replace the label with an input
     * field for editing but since the input field had not
     * existed before it was difficult to add focus.
     */
    AppListComponent.prototype.ngAfterViewChecked = function () {
        this.focusedNameInput = this.focusedName;
        if (this.focusedNameInput.first) {
            this.focusedNameInput.first.nativeElement.focus();
        }
        this.focusedTimeInput = this.focusedTime;
        if (this.focusedTimeInput.first) {
            this.focusedTimeInput.first.nativeElement.focus();
        }
    };
    AppListComponent.prototype.createNew = function () {
        try {
            this.goalTrackService.createNewTrack();
            this.tracks = this.goalTrackService.getAllTracks();
            this.noTracks = false;
        }
        catch (error) {
            console.error('Could not create a new track. ' + error.message);
        }
    };
    AppListComponent.prototype.findPercentCompleted = function (track) {
        return this.goalTrackService.overallCompleted(track);
    };
    AppListComponent.prototype.makeSelectedTrack = function (track) {
        if (this.track !== track) {
            this.goalTrackService.makeSelectedTrack(track);
            this.track = track;
        }
    };
    AppListComponent.prototype.deleteTrack = function (track) {
        try {
            if (confirm('Are you sure you want to delete this track? It can\'t be recovered.')) {
                this.goalTrackService.deleteTrack(track);
                // Update class member to maintain localStorage sync.
                if (this.track.name === track.name) {
                    this.track = null;
                }
                for (var i = 0; i < this.tracks.length; i++) {
                    if (track.name === this.tracks[i].name) {
                        this.tracks.splice(i, 1);
                    }
                }
                if (this.tracks.length === 0) {
                    this.noTracks = true;
                }
            }
        }
        catch (error) {
            console.log('Could not delete track from localStorage and/or class property. ' + error.message);
        }
    };
    AppListComponent.prototype.editTrack = function ($event) {
        this.makeSelectedTrack($event);
        this.goalTrackService.trackToEdit = this.track['name'];
    };
    AppListComponent.prototype.exportTrackData = function (track) {
        this.goalTrackService.exportTrackData(track);
    };
    AppListComponent.prototype.updateTrackName = function (event, track, property) {
        var _this = this;
        var nameIsNotTaken;
        if (event.type === 'blur') {
            nameIsNotTaken = this.goalTrackService.nameCheck(property);
        }
        if (nameIsNotTaken) {
            var formerName = track.name;
            track.name = property === '' ? formerName : property;
            localStorage.setItem(track['name'], JSON.stringify(track));
            localStorage.removeItem(formerName);
        }
        track.editName = false;
        setTimeout(function () {
            _this.disabled = false;
        }), 500;
    };
    AppListComponent.prototype.updateTrackTime = function (track, property) {
        var _this = this;
        // Check if number starts with 0
        if (property.charAt(0) === '0') {
            property = parseFloat(property);
        }
        track.time = property > 0 ? property : 0;
        localStorage.setItem(this.track['name'], JSON.stringify(track));
        track.editTime = false;
        setTimeout(function () {
            _this.disabled = false;
        }), 500;
    };
    AppListComponent.prototype.editTrackDetails = function (track, property) {
        this.disabled = true;
        if (property === 'name') {
            track.editName = true;
        }
        else {
            track.editTime = true;
        }
    };
    AppListComponent.prototype.updateName = function (event, track, name) {
        if (event.keyCode === 13) {
            this.updateTrackName(event, track, name);
        }
    };
    AppListComponent.prototype.updateTime = function (event, track, time) {
        if (event.keyCode === 13) {
            this.updateTrackTime(track, time);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('name'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppListComponent.prototype, "focusedName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('time'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppListComponent.prototype, "focusedTime", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppListComponent.prototype, "receiver", void 0);
    AppListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-list',
            template: __webpack_require__(/*! ./app-list.component.html */ "./src/app/views/app-list/app-list.component.html"),
            styles: [__webpack_require__(/*! ./app-list.component.css */ "./src/app/views/app-list/app-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_goal_track_service__WEBPACK_IMPORTED_MODULE_1__["GoalTrackService"]])
    ], AppListComponent);
    return AppListComponent;
}());



/***/ }),

/***/ "./src/app/views/app-output/app-output.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/app-output/app-output.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#progressContainer {\n    /* display: flex; */\n    /* min-height: 100px;\n    justify-content: center;\n    align-items: center; */\n    /* position: relative;\n    border-left: 1px solid;\n    border-right: 1px solid;\n    background: #fff; */\n    /* margin: 0 auto 3rem;\n    transform: rotate(270deg);\n    width: 100px;\n    padding: 0; */\n    margin: 0 auto 2em;\n    position: relative;\n    height: 150px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#progressContainer > div {\n    /* margin: 0 auto 3rem; */\n    height: 300px;\n    width: 100px;\n    /* padding: 0;\n    position: absolute;\n    left: 50%; */\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n}\n\n@media screen and (min-width: 568px) {\n    #progressContainer > div {\n        height: 300px;\n    }\n}\n\n.top {\n    position: absolute;\n    width: 100%;\n    text-align: right;\n    z-index: 1;\n    left: 33%;\n    top: 80%;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n\n.top:before {\n    content: '';\n    background: white;\n    width: 19%;\n    height: 20px;\n    display: inline-block;\n    position: absolute;\n    z-index: -1;\n    right: -1%;\n    opacity: .5;\n}\n\n/*.top:after {\n    content: '';\n    width: 50%;\n    border-bottom: 1px solid;\n    height: 1px;\n    position: absolute;\n    right: 0;\n    top: 133%;\n    -webkit-transform: translatey(-50%);\n    transform: translatey(-50%);\n    z-index: -1;\n}*/\n\n.bottom {\n    position: absolute;\n    width: 100%;\n    text-align: left;\n    z-index: 1;\n    right: 33%;\n    bottom: 0;\n    bottom: 80%;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n\n.bottom:before {\n    content: '';\n    background: white;\n    width: 18%;\n    height: 20px;\n    display: inline-block;\n    position: absolute;\n    z-index: -1;\n    left: -1%;\n    opacity: .5;\n}\n\n/* .bottom:after {\n    content: '';\n    width: 50%;\n    border-bottom: 1px solid;\n    height: 1px;\n    position: absolute;\n    left: 0;\n    bottom: 133%;\n    -webkit-transform: translatey(-50%);\n    transform: translatey(-50%);\n    z-index: -1;\n} */\n\n#progressHeader {\n    margin: 0 0 1rem;\n}\n\n.progressBar {\n    /* transform: rotate(270deg);\n    height: 4px;\n    width: 100px; */\n    position: relative;\n}\n\n/* progress {\n    position: absolute;\n    transform: translate(-50%, -50%);\n    left: 50%;\n    top: 50%;\n    display: inline-block;\n    border-bottom: 1px solid #fff;\n} */\n\nprogress[value] {\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    /* box-sizing: border-box;\n    display: inline-block; */\n    -webkit-appearance: none;\n    -moz-appearance: none;\n         appearance: none;\n    /* opacity: .75;\n    height: 11px;\n    width: 100px; */\n}\n\nprogress[value]::-webkit-progress-bar {\n    background-color: #eee;\n    border-radius: 2px;\n}\n\n.before {\n    content: '';\n    position: absolute;\n    right: 110%;\n    -webkit-transform: rotate(25deg);\n            transform: rotate(25deg);\n}\n\n.after {\n    position: absolute;\n    right: -45px;\n    top: 50%;\n    -webkit-transform: translatey(-50%) rotate(90deg);\n            transform: translatey(-50%) rotate(90deg);\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n}\n\nprogress::-webkit-progress-value {\n    transition: 1s width ease-in-out;\n}\n\nform {\n    display: flex;\n    justify-content: space-around;\n}\n\nul {\n    display: flex;\n}\n\nli {\n    padding: 0;\n    margin: 0;\n    height: 100px;\n    width: 20px;\n}\n\nprogress.progress-bar:before {\n    content: '';\n    display: inline-block;\n    width: .5em;\n    height: 1px;\n    background:#000;\n    position: absolute;\n        top: 50%;\n        right: 100%;\n    -webkit-transform: translatey(-50%);\n            transform: translatey(-50%);\n}\n\n/* .monthView progress{\n    height: 10px;\n}\n\n.three-month-view progress{\n    height: 5px;\n} */\n\n.six-month-view progress{\n    /* height: 2px; */\n    border-bottom: none;\n}\n\n.monthView .before,\n.three-month-view .before,\n.six-month-view .before,\n.before  + progress.progress-bar:before {\n    display: none;\n}\n\n.monthView:nth-of-type(3n-1) .before,\n.three-month-view:nth-of-type(9n+5) .before,\n.six-month-view:nth-of-type(18n+10) .before,\n.monthView:nth-of-type(3n-1) .before  + progress.progress-bar:before,\n.three-month-view:nth-of-type(9n+5) .before  + progress.progress-bar:before, \n.six-month-view:nth-of-type(18n+10) .before  + progress.progress-bar:before {\n    display: inline-block;\n}\n\nspan.before {\n    font-size: 8px;\n}"

/***/ }),

/***/ "./src/app/views/app-output/app-output.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/app-output/app-output.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"output-view sub-header\">\n    <h2>Active: {{ track.name }}</h2>\n    <div>\n    </div>\n</div>\n<div *ngIf=\"!noTracks\">\n    <h3 id=\"progressHeader\">\n        <span *ngIf=\"showTotalCompleted\">You've completed {{ percentageDone.toFixed(2) }}%\n        of your goal {{ completed }}.</span> Your {{ timePeriod }} is\n        {{ dailyMinutes.toFixed(0) }} minutes or\n        {{ dailyPercentage.toFixed(2) }}%.<span *ngIf=\"!showTotalCompleted\">\n            {{ noTimeFrameChosen }}</span>\n    </h3>\n    <div id=\"progressContainer\">\n        <div>\n            <span class=\"top\">{{ this.mostTime }} hrs</span>\n                <div class=\"progressBar\" [style.height.px]=\"width\"\n                                        [class.monthView]=\"isMonthView\" \n                                        [class.three-month-view]=\"isThreeMonthView\" \n                                        [class.six-month-view]=\"isSixMonthView\" \n                                        *ngFor=\"let dailyRecordedTime of dailyRecordedTimes; let index = index; let count = count\">\n                    <span class=\"before\">{{ dailyRecordedTime['date'] }}</span>\n                    <progress class=\"progress-bar\" \n                              [style.height.px]=\"width\"\n                              max=\"{{ this.mostTime }}\" \n                              value=\"{{ dailyRecordedTime['time'] }}\"></progress>\n                </div>\n                <!-- <progress [style.height.px]=\"width\" *ngFor=\"let dailyRecordedTime of dailyRecordedTimes; let index = index; let count = count\"\n                        class=\"progress-bar\" max=\"{{ mostTime }}\" value=\"{{ dailyRecordedTime['time'] }}\">\n                    </progress>\n                    <span class=\"before\">{{ dailyRecordedTime['date'] }}</span> -->\n            <span class=\"bottom\">&nbsp;&nbsp;0 hrs</span>\n        </div>\n    </div>\n    <div id=\"formContainer\">\n        <form action=\"\">\n            <label for=\"1-month\">\n                <input type=\"radio\" name=\"timeFrame\" id=\"1-month\" class=\"radio\" (click)=\"changeTimeFrame($event)\">1-month\n            </label>\n            <label for=\"3-month\">\n                <input type=\"radio\" name=\"timeFrame\" id=\"3-month\" class=\"radio\" (click)=\"changeTimeFrame($event)\">3-month\n            </label>\n            <label for=\"6-month\">\n                <input type=\"radio\" name=\"timeFrame\" id=\"6-month\" class=\"radio\" (click)=\"changeTimeFrame($event)\">6-month\n            </label>\n        </form>\n    </div>\n</div>\n<div *ngIf=\"noTracks\"><h3>Currently there are zero tracks selected. Please select a track or create a new one.</h3></div>\n\n"

/***/ }),

/***/ "./src/app/views/app-output/app-output.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/app-output/app-output.component.ts ***!
  \**********************************************************/
/*! exports provided: AppOutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppOutputComponent", function() { return AppOutputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_goal_track_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/goal-track.service */ "./src/app/services/goal-track.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppOutputComponent = /** @class */ (function () {
    function AppOutputComponent(goalTrackService, router) {
        this.goalTrackService = goalTrackService;
        this.router = router;
        this.dailyMinutes = null;
        this.dailyPercentage = null;
        this.percentageDone = null;
        this.timePeriod = 'progress today';
        this.completed = ' today';
        this.noTimeFrameChosen = ' Select an option below to view a different time frame.';
        this.dailyRecordedTimes = [];
        this.noTracks = false;
        this.track = this.goalTrackService.track;
        this.showTotalCompleted = false;
        this.mobileDeviceWidth = 300;
        var track = this.goalTrackService.track;
        if (!track) {
            this.noTracks = true;
        }
        else {
            var sumInInterval = this.goalTrackService.timeInInterval(track['name'], 0, 0);
            this.newerTrackCheckArray = this.goalTrackService.verifyNewerTrackInfo();
            this.dailyMinAndPerc(track, sumInInterval, 1);
        }
    }
    AppOutputComponent.prototype.ngAfterContentInit = function () {
        this.dailyRecordedTimes = this.newerTrackCheckArray[1] > 30 ? this.populateProgressBars(30) : this.populateProgressBars(this.newerTrackCheckArray[1]);
        this.width = this.newerTrackCheckArray[1] >= 29 ? 10 : Math.floor(this.mobileDeviceWidth / this.newerTrackCheckArray[1]);
        this.isMonthView = true;
    };
    /**
     *
     * @param track
     * @param sumInInterval
     * @param daysInInterval
     */
    AppOutputComponent.prototype.dailyMinAndPerc = function (track, sumInInterval, daysInInterval) {
        this.dailyMinutes = this.newerTrackCheckArray[1] > daysInInterval ? this.goalTrackService.dailyMinutes(sumInInterval, daysInInterval) : this.newerTrackCheckArray[0];
        this.dailyPercentage = this.newerTrackCheckArray[1] > daysInInterval ? (this.goalTrackService.dailyPercentage(track['name'], sumInInterval, daysInInterval)) / 60 : this.newerTrackCheckArray[0];
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
            this.isThreeMonthView = false;
            this.isSixMonthView = false;
            this.showTotalCompleted = true;
            this.timePeriod = 'daily average';
            switch (timeValue) {
                case '1-month':
                    var sumInInterval = this.goalTrackService.timeInInterval(this.track['name'], 0, 29);
                    this.completed = ' this month';
                    this.dailyMinAndPerc(this.track, sumInInterval, 29);
                    this.dailyRecordedTimes = this.newerTrackCheckArray[1] > 30 ? this.populateProgressBars(30) : this.populateProgressBars(this.newerTrackCheckArray[1]);
                    this.isMonthView = true;
                    this.width = this.newerTrackCheckArray[1] >= 29 ? 10 : Math.floor(this.mobileDeviceWidth / this.newerTrackCheckArray[1]);
                    break;
                case '3-month':
                    sumInInterval = this.goalTrackService.timeInInterval(this.track['name'], 0, 89);
                    this.completed = ' in the last 90 days';
                    this.dailyMinAndPerc(this.track, sumInInterval, 89);
                    this.dailyRecordedTimes = this.newerTrackCheckArray[1] > 30 ? this.populateProgressBars(90) : this.populateProgressBars(this.newerTrackCheckArray[1]);
                    this.isThreeMonthView = true;
                    this.width = this.newerTrackCheckArray[1] >= 89 ? 3.33 : Math.floor(this.mobileDeviceWidth / this.newerTrackCheckArray[1]);
                    break;
                case '6-month':
                    sumInInterval = this.goalTrackService.timeInInterval(this.track['name'], 0, 179);
                    this.completed = ' in the last 6 months';
                    this.dailyMinAndPerc(this.track, sumInInterval, 179);
                    this.dailyRecordedTimes = this.newerTrackCheckArray[1] > 30 ? this.populateProgressBars(179) : this.populateProgressBars(this.newerTrackCheckArray[1]);
                    this.isSixMonthView = true;
                    this.width = this.newerTrackCheckArray[1] >= 179 ? 1.66 : Math.floor(this.mobileDeviceWidth / this.newerTrackCheckArray[1]);
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
        var splitTime = time.split('-');
        var trimmedDayDate = splitTime[1];
        var trimmedMonthDate = splitTime[2];
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
            // create new array
            var progressArray = [];
            // create objects to populate new array (equal to number passed as arg)
            for (var i = 0; i < timeInterval; i++) {
                // create new date object for comparison
                var datePlaceholder = this.goalTrackService.dateOfNthDaysAgo(i);
                var progressBarObject = {
                    'date': this.trimmedDate(datePlaceholder),
                    'time': this.timeFinder(this.track, datePlaceholder)
                };
                progressArray.push(progressBarObject);
            }
            this.findMostTime(progressArray);
            return progressArray.reverse();
        }
        catch (error) {
            console.log('Unable to populate progress bar array ' + error.message);
        }
    };
    AppOutputComponent.prototype.compareFunction = function (a, b) {
        return a - b;
    };
    AppOutputComponent.prototype.findMostTime = function (progressArray) {
        try {
            var timeArray = [];
            for (var i = 0; i < progressArray.length; i++) {
                var time = progressArray[i].time;
                timeArray.push(time);
            }
            var sortedArray = timeArray.sort(this.compareFunction);
            // Find the most time in the array
            var mostTime = sortedArray.pop();
            if (mostTime) {
                this.mostTime = mostTime;
            }
            else {
                this.mostTime = 0;
            }
        }
        catch (error) {
            console.log('Unable to find top time' + error.message);
        }
    };
    AppOutputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-output',
            template: __webpack_require__(/*! ./app-output.component.html */ "./src/app/views/app-output/app-output.component.html"),
            styles: [__webpack_require__(/*! ./app-output.component.css */ "./src/app/views/app-output/app-output.component.css")]
        }),
        __metadata("design:paramtypes", [_services_goal_track_service__WEBPACK_IMPORTED_MODULE_2__["GoalTrackService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppOutputComponent);
    return AppOutputComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Jef/Development/code_projects/tk3/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map