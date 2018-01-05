'use strict';
import angular from 'angular'
import 'angular-route'
import html from './view1.html'

const view1Module = angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    template: html,
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

export default view1Module;