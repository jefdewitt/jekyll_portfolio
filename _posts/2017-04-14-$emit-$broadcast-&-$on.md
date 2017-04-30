---
layout: post
title:  "$emit $broadcast & $on"
image:
date:   2017-04-14 14:32:11 -0400
categories: Angular
---
Ever try to fire off an event in one controller from another in your Angular app? Neither had I. Where services share data between controllers (factories and providers will work just as well), Angular's event system can do much more. It shares events, like updates to a form field or triggering style changes based on a state, from one $scope to another. Pretty dope stuff.

## $emit $broadcast & $on

Some quick rules of thumb: $scope.$emit fires up the $scope hierarchy, $scope.emit fire down the $scope hierarchy. Put simply, use $emit to reach parent $scopes/controllers and use $broadcast to reach child $scopes/controllers. $scope.$on listens for these events.

```javascript
// event fires up to parent $scope
$scope.$emit('myEvent', 'eventData');

// event fires down to child $scope
$scope.$broadcast('myEvent', 'eventData');

// listen for events
$scope.$on('myEvent'), function(event, data){
  // Do something cool
}
```
You'll notice that each one of these takes an event name and data, like an object or array, as arguments.

## Hold Your Horses

But, Jef, how you gonna effect a sibling $scope? I was hoping you might ask that. Turns out, you've got a couple ways.

One way to talk to sibling $scopes is via $rootScope. Using $rootScope allows you to talk to `all` $scopes. This means either $emit or $broadcast would work.

```javascript
// event fires everywhere
$rootScope.$emit('myEvent', 'eventData');

// event fires everywhere
$rootScope.$broadcast('myEvent', 'eventData');
```

Simple and effective but wrong.

## Don't Mess With $rootScope

Using $rootScope, unless absolutely necessary, is a great way to write bad code. It muddies the waters by essentially making everything globally available. It just increases the likelihood you'll step on your own toes (or someone else's) later with naming conflicts.

Plus, there's a much better way. Use $parent to reach up to a $scope's parent $scope and then use $broadcast to reach back down to child $scopes, thus targeting that sibling $scope you're trying to reach. 

```javascript
// event fires up to parent $scope before firing back down to child $scope
$rscope.$parent.$broadcast('myEvent', 'eventData');
```

Now you've a simple, best-practices-preserving way of firing events between controllers, even siblings ;).

Special shout out to [Todd Motto](https://toddmotto.com/all-about-angulars-emit-broadcast-on-publish-subscribing/) who's insight on Angular is immensely helpful.


[ngStorage](https://github.com/gsklee/ngStorage) is an Angular JS module for using local storage the Angular Way. Its method for saving data is remarkably straight forward. No getting and setting, no parsing & serializing each time you store or retrieve.

## Install

```shell
npm install ngstorage
```

Yeah, it's that easy.

## Usage

Just add `ngStorage` as a requirement to your app and use `Dependency Injection` to make it available to your controller(s).

```javascript
angular.module('app', ['ngStorage'])

.controller('mainCtrl', function(
  $scope,
  $localStorage){
    // Controller logic goes here...
  });
```

Then, hook into it via a `$scope` reference and set a `$localStorage` property to act as array.

```javascript
$scope.$storage = $localStorage;

if ($localStorage.project === undefined) {
  $localStorage.project = [];
}
```

This way, I can just push new objects to my `$scope.storage.project` array.

```javascript
$scope.$storage.project.push(newObject);
```

And data sticks around till you manually delete it with a JavaScript command or clearing browser data. That means data will persist after browser tabs are closed; even after browser restarts. 

All the info here is based on [gsklee](https://github.com/gsklee)'s work on GitHub. For the ngStorage docs, click [here](https://github.com/gsklee/ngStorage).
