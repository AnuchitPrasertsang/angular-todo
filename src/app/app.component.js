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

    addTodo({todo}) {
      this.todoService.create(todo)
        .then(() => {
          this.getTodos();
        });
    }

    deleteTodo({todo}) {
      this.todoService.delete(todo)
        .then(() => {
          this.getTodos();
        });
    }
  }
};
