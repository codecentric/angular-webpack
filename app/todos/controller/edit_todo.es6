'use strict';

export default class EditTodoController {

  constructor(TodoService, $location) {
    this.creatingNew = false;
    this.editMode = false;
    this.TodoService = TodoService;
    this.location = $location;

    this.todos = TodoService.getTodos();
    let id = this.location.search().id;
    if (angular.isUndefined(id)) {
      this.location.search('id', this.todos[0].id);
    }
    id = parseInt(id);
    this.todo = this.todos.find((todo)=> {
      return todo.id === id
    });
  }

  create() {
    this.todo = this.TodoService.create();
    this.backupForCancel = null;
    this.creatingNew = true;
    this.editMode = true;
  };

  edit() {
    if (this.editMode) {
      return;
    }
    this.backupForCancel = this.copy(this.todo);
    this.creatingNew = false;
    this.editMode = true;
  };

  save() {
    if (this.creatingNew) {
      this.TodoService.insert(this.todo);
      this.location.search('id', this.todo.id);
    }
    this.editMode = false;
    this.creatingNew = false;
    this.backupForCancel = null;
  };

  cancel() {
    if (!this.creatingNew) {
      // rollback edits
      this.todo.title = this.backupForCancel.title;
      this.todo.due = this.backupForCancel.due;
      this.todo.text = this.backupForCancel.text;
    } else {
      // discard new todos, set active todos to some arbitrary todos
      this.todo = this.TodoService.getTodos()[0];
      this.creatingNew = false;
    }
    this.editMode = false;
    this.location.search('id', this.todo.id);
  };

  remove() {
    this.TodoService.remove(this.todo);
    // set active todos to some arbitrary todos
    this.todo = this.TodoService.getTodos()[0];
    this.location.search('id', this.todo.id);
  };

  copy() {
    return {
      title: this.todo.title,
      due: this.todo.due,
      text: this.todo.text,
    };
  }
};
