import '../css/app.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';

angular
  .module('app', [uiRouter])
  .component('app', AppComponent)
  .service('TodoService', TodoService);
