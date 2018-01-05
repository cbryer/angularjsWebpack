'use strict';
import 'html5-boilerplate/dist/css/normalize.css';
import 'html5-boilerplate/dist/css/main.css';
import './app.css';
import 'html5-boilerplate/dist/js/vendor/modernizr-3.5.0.min.js';
import 'jquery';
import angular from 'angular';
import 'angular-route';
import view1Module from './view1/view1';
import view2Module from './view2/view2';
import myAppVersionModule from './components/version/version';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    view1Module.name,
    view2Module.name,
    myAppVersionModule.name
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
