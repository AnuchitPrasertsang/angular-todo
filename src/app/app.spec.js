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

  it('should call the `onUpdate` first solution', () => {
    spyOn($ctrl, "onUpdate");

    $ctrl.onUpdate("nong");

    expect($ctrl.onUpdate).toHaveBeenCalledWith("nong");
  });

  it('should call the `onUpdate` second solution', inject(($injector) => {
    let $componentController = $injector.get("$componentController");
    let onUpdateSpy = jasmine.createSpy('onUpdate');
    let bindings = { hero: {}, onUpdate: onUpdateSpy};
    let ctrl = $componentController('app', {}, bindings);

    ctrl.onUpdate("Anuchit");

    expect(ctrl.onUpdate).toHaveBeenCalledWith("Anuchit");
  }));
});
