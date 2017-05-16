import templateUrl from './todo-list.component.html';

export const TodoListComponent = {
  templateUrl,
  bindings: {
    todos: '<',
    deleteTodo: '&'
  },
  controller: class TodoListComponent {
    onClickDelete(todo) {
      this.deleteTodo({
        $event: { todo }
      });
    }
  }
};
