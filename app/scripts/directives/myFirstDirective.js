angular.module('lightningTalkApp')
    .directive('myFirstDirective', function(){
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="hero-unit"><h1>Hello, {{ name || "Anonymous" }}!</h1><hr/><input type="text" ng-model="name" /></div>',
            link: function(scope){
                scope.name = "World";
            }
        }
    });