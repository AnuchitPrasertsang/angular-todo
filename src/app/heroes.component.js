import templateUrl from './heroes.component.html';

export const HeroesComponent = {
  templateUrl,
  controller: class HeroesComponent {
    heroes;
    selectedHero;

    constructor(HeroService, $state) {
      this.heroService = HeroService;
      this.$state = $state;
    }

    $onInit() {
      this.heroService.getHeroes()
        .then((heroes) => {
          this.heroes = heroes;
        });
    }

    onSelect(hero) {
      this.selectedHero = hero;
    }

    goToDetail() {
      this.$state.go('detail', {id: this.selectedHero.id});
    }
  }
};
