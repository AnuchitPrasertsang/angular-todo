import angular from 'angular';

describe('AppComponent', () => {
  let $ctrl;
  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($componentController, $rootScope) => {
    $ctrl = $componentController('app', {$scope: $rootScope.$new()});
  }));

  it('set initial values', () => {
    expect($ctrl.newTodo).toEqual({id: '', topic: ''});
    expect($ctrl.todos).toEqual([]);
  });
});
