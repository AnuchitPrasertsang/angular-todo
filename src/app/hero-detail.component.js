import templateUrl from './hero-detail.component.html';

export const HeroDetailComponent = {
  templateUrl,
  controller: class HeroDetailComponent {
    constructor($stateParams, HeroService) {
      this.$stateParams = $stateParams;
      this.heroService = HeroService;
    }

    $onInit() {
      this.heroService.getHero(parseInt(this.$stateParams.id))
        .then((hero) => {
          this.selectedHero = hero;
        });
    }
  }
}
