import angular from 'angular';
import { API_HOST } from './constants';

describe('TodoService', () => {
  let todoService, $httpBackend, $rootScope;
  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($injector) => {
    todoService = $injector.get('TodoService');
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
  }));

  describe('getTodos', () => {
    it('call get and response todos', () => {
      $httpBackend.expectGET(API_HOST + '/todos').respond(200, [{id: "1", topic: "test"}]);
      let promise = todoService.getTodos();
      $httpBackend.flush();
      promise.then((todos) => {
        expect(todos).toEqual([{id: "1", topic: "test"}]);
      });
      $rootScope.$digest();
    });
  });
});
