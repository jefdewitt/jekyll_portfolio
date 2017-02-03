/**
 * Declare our module (app) and directive(s). Pay special attention to how the
 * controller is specified in the callback for the return. Another way of
 * adding a controller is via an element tag in the HTML. It would resemble:
 * <div ng-controller="mainController">.
 */
'use strict';

angular.module('angularApp')

.directive('fields', function() {
    return {
        templateUrl: 'templates/fields.html',
        controller: 'firstCtrl',
        replace: true
    }
})

// .directive('secondElement', function() {
//     return {
//         template: 'This is my second directive.',
//         restrict: 'E'
//     };
// });
