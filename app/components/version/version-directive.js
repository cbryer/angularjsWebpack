import angular from 'angular';
'use strict';

const versionDirectiveModule = angular.module('myApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

export default versionDirectiveModule;