import angular from 'angular';

describe('HeroesComponent', () => {

  beforeEach(angular.mock.module('app'));

  let $ctrl, scope, HeroService, $q, $state;
  beforeEach(inject(($injector) => {
    HeroService = $injector.get('HeroService');
    $q = $injector.get('$q');
    $state = $injector.get('$state');
    
    let $componentController = $injector.get('$componentController');
    let $rootScope = $injector.get('$rootScope'); 

    scope = $rootScope.$new();

    $ctrl = $componentController('heroes', {$scope: scope}, {});
  }));

  it('should be set `selectedHero` to hero from selected', inject(() => {
    let hero = {
      id: 1,
      name: 'nong'
    };

    $ctrl.onSelect(hero);

    expect($ctrl.selectedHero).toEqual(hero);
  }));

  it('should be display detail page', inject(() => {
    //Arrange
    spyOn($state, 'go');
    $ctrl.selectedHero = {id: 1};

    //Action
    $ctrl.goToDetail();

    //Assertion
    expect($state.go).toHaveBeenCalledWith('detail', {id: 1});
  }));

  it('should be get hero from service', inject(() => {
    spyOn(HeroService, 'getHeroes').and.returnValue($q.when([{id: 1, name: "nong"}]));

    $ctrl.$onInit();
    scope.$digest();

    expect(HeroService.getHeroes).toHaveBeenCalled();
    expect($ctrl.heroes).toEqual([{id: 1, name: "nong"}]);
  }));
});