'use strict';

angular.module('angularApp')

.service('dataService', function($http) {

    this.helloConsole = function() {
        console.log('This is the hello console service!');
    };

    this.getFields = function(callback) {
        $http.get('mock/fields.json')
        .then(callback)
    };

    this.deleteField = function(field) {
        console.log("The " + field.name + "field has been deleted.")

    };

    this.saveFields = function(fields) {
        console.log(fields.length + " fields have been saved.")

    };

});
