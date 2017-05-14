import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';

angular
  .module('app', [uiRouter])
  .component('app', AppComponent);
