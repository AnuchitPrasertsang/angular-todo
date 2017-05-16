import '../css/app.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { TodoFormComponent } from './todo-form.component';

angular
  .module('app', [uiRouter])
  .component('app', AppComponent)
  .component('todoForm', TodoFormComponent)
  .service('TodoService', TodoService);
