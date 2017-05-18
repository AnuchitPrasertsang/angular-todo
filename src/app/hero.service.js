

export class HeroService {
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }

  getHeroes() {
    return this.$http.get('http://10.0.1.4:3000/heroes')
      .then(response => response.data);
  }

  getHero(id) {
    return this.getHeroes()
      .then((heroes) => {
        return heroes.find(hero => hero.id === id);
      });

  }
}
