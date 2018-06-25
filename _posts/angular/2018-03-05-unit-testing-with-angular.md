---
layout: post
title: "Unit Testing with Angular"
image: testing.jpg
date: 2018-03-05 09:32:11 -0400
categories: Angular
---
Unit Tests examine small chunks (units) of code to determine if they operate as intended. Are you using `Angular CLI`? If so, creating Unit Tests is insanely easy -- 'cause they're already done for ya!

No need to get off your lazy bum -- a testing framework (Jasmine) and a test runner (Karma) come baked into Angular when developing with the CLI. All this means is that as you create components and services the test files are created automagically right alongside.

When you're ready to test, just run `ng test` from Terminal inside your project.

## What To Test For

The CLI creates test files even for components. But at the enterprise level, I usually see Unit Tests utilized to test service methods and functionality. Things like whether events are logging, if the data returned in a response contains all the keys you anticipate, or confirming that values are being passed correctly are all good subjects for testing. 

When running tests you'll see logging for what passes and what fails. And when code is changed you'll find out quickly if bugs have been introduced. It will be easy to identify where the breaking changes have been introduced.