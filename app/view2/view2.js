'use strict';
import angular from 'angular';
import 'angular-route';
import html from './view2.html';

const view2Module = angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    template: html,
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);

export default view2Module;