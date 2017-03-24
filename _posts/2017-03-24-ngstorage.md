---
layout: post
title:  "ngStorage"
image:
date:   2017-03-24 07:32:11 -0400
categories: Angular
---
As a front-end dev my need for data storage was never a chief concern. Not that it isn't important, but I usually didn't have to get my hands dirty with managing databases. That was something for the back-end guys.

With my Angular JS app, [Tracker Keeper]('http://jefdewitt.com/trackerkeeper') that changed. I knew that using a database would be overkill, as my storage needs were minimal. So, I turned to local storage, or data stored in the browser.

## ngStorage

[ngStorage](https://github.com/gsklee/ngStorage) is an Angular JS module for using local storage the Angular Way. Its method for saving data is remarkably straight forward. No getting and setting, no parsing & serializing each time you store or retrieve.

## Install

```shell
npm install ngstorage
```
## Usage

Just add `ngStorage` as a requirement to your app and use `Dependency Injection` to make it available to your controller(s).

```javascript
angular.module('app', ['ngStorage'])

.controller('mainCtrl, function(
  $scope,
  $localStorage){
    // Controller logic goes here...
  });
```

Then hook into it via a `$scope` reference.

```javascript
$scope.$storage = $localStorage;

if ($localStorage.project === undefined) {
  $localStorage.project = [];
}
```
