import templateUrl from './todo-form.component.html';

export const TodoFormComponent = {
  templateUrl,
  bindings: {
    addTodo: '&'
  },
  controller: class TodoFormComponent {
    newTodo = {
      id: '',
      topic: ''
    };

    submit() {
      this.addTodo({
        $event: { todo : this.newTodo }
      });

      this.newTodo = {
        id: '',
        topic: ''
      };
    }
  }
};
