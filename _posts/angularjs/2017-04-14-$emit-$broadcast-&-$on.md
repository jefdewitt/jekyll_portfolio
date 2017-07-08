---
layout: post
title: "$emit, $broadcast, & $on"
image: microphone.jpg
date: 2017-04-14 14:32:11 -0400
categories: AngularJS
---
Ever try to fire off an event in one controller from another in your Angular app? Neither had I. Where services share data between controllers (factories and providers will work just as well), Angular's event system can do much more. It shares events, like updates to a form field or triggering style changes based on a state, from one $scope to another. Pretty dope stuff.

## $emit $broadcast & $on

Some quick rules of thumb: $scope.$emit fires up the $scope hierarchy, $scope.broadcast fires down the $scope hierarchy. Put simply, use $emit to reach parent $scopes/controllers and use $broadcast to reach child $scopes/controllers. $scope.$on listens for these events.

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

Simple and effective but not ideal.

## Don't Mess With $rootScope

Using $rootScope, unless absolutely necessary, is a great way to write bad code. It muddies the waters by essentially making everything globally available. It just increases the likelihood you'll step on your own toes (or someone else's) later with naming conflicts.

Plus, there's a much better way. Use $parent to reach up to a $scope's parent $scope and then use $broadcast to reach back down to child $scopes, thus targeting that sibling $scope you're trying to reach.

```javascript
// event fires up to parent $scope before firing back down to child $scope
$scope.$parent.$broadcast('myEvent', 'eventData');
```

Now you've a simple, best-practices-preserving way of firing events between controllers, even siblings ;).

Special shout out to [Todd Motto](https://toddmotto.com/all-about-angulars-emit-broadcast-on-publish-subscribing/){:target="_blank"} who's insight on Angular is immensely helpful.
