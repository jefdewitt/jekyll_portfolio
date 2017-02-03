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
