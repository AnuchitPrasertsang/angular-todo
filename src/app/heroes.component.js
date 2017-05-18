import templateUrl from './heroes.component.html';

export const HeroesComponent = {
  templateUrl,
  controller: class HeroesComponent {
    heroes;
    selectedHero;
    spyCall = false;

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
      this.$state.go('detail', {
        id: this.selectedHero.id
      });
    }

    sampleSpy() {
      if (true) {
        this.heroServiceSpy();
      }
    }

    heroServiceSpy() {
      this.spyCall = true;
    }
  }
};