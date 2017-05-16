import templateUrl from './app.component.html';

export const AppComponent = {
  templateUrl,
  controller: class AppComponent {
    newTodo = {
      id: '',
      topic: ''
    };
    todos = [];

    constructor(TodoService) {
      this.todoService = TodoService;
    }

    $onInit() {
      this.getTodos();
    }

    getTodos() {
      this.todoService.getTodos()
        .then((todos) => {
          this.todos = todos;
        });
    }

    addTodo() {
      this.todoService.create(this.newTodo)
        .then(() => {
          this.newTodo.id = '';
          this.newTodo.topic = '';
          this.getTodos();
        });
    }

    deleteTodo(todo) {
      this.todoService.delete(todo)
        .then(() => {
          this.getTodos();
        });
    }
  }
};
