angular.module('angularApp')

.directive('firstElement', function() {
    return {
        template: 'This is my first directive.'
    };
});

// .directive('secondElement', function() {
//     return {
//         template: 'This is my second directive.',
//         restrict: 'E'
//     };
// });
