angular.module('lightningTalkApp')
    .directive('prettyprint', function($window){
        return{
            restrict: 'C',
            link: function(scope, elm, attr){
                var showLineNumbers = scope.$eval(attr.showLineNumbers);
                var codeType = attr.codeType;

                elm.html( $window.prettyPrintOne( elm.html(), codeType, showLineNumbers ) );
            }
        }
    });