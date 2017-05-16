import { API_HOST } from './constants';

export class TodoService {
  constructor($http) {
    this.$http = $http;
  }

  create(todo) {
    return this.$http.post(API_HOST + '/todos', {
      id: todo.id,
      topic: todo.topic
    });
  }

  getTodos() {
    return this.$http.get(API_HOST + '/todos')
      .then((response) => {
        return response.data;
      });
  }

  delete(todo) {
    return this.$http.delete(API_HOST + '/todos/' + todo.id);
  }
}
