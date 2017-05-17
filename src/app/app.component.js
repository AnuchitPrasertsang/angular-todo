import templateUrl from './app.component.html';

const HEROES = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

export const AppComponent = {
  templateUrl,
  controller: class AppComponent {
    title = 'Tour of Heroes';

    heroes = HEROES;

    selectedHero;

    onSelect(hero) {
      this.selectedHero = hero;
    }

  }
};
