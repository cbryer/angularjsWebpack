import angular from 'angular';
import interpolateFilterModule from './interpolate-filter';
import versionDirectiveModule from './version-directive';
'use strict';

const myAppVersionModule = angular.module('myApp.version', [
    interpolateFilterModule.name,
    versionDirectiveModule.name
])

.value('version', '0.1');

export default myAppVersionModule;