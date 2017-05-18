import '../css/app.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';
import { Calculate } from './calculate.service';
angular
  .module('app', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider
      .state('heroes', {
        url: '/heroes',
        component: 'heroes'
      })
      .state('detail', {
        url: '/detail/:id',
        component: 'heroDetail'
      });
  })
  .component('app', AppComponent)
  .component('heroDetail', HeroDetailComponent)
  .service('HeroService', HeroService)
  .service('Calculate', Calculate)
  .component('heroes', HeroesComponent);

