import { TodoStatusType } from './todo-status-type.enum';
import { TodoListService } from './todo-list.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  /**
   * if you want to let service only be DI in this component then don't use
   *
   * @Injectable({
   *  providedIn: 'root'
   * })
   *
   * in service file
   *
   * declare here as
   * providers: [ TodoListService ]
   *
   */
})
export class TodoListComponent implements OnInit {

  // injecting TodoListervice at construtor
  constructor(private todoListService: TodoListService) { }

  /**
   * @enum of todo status
   */
  todoStatusType = TodoStatusType;

  private status = TodoStatusType.All;

  ngOnInit(): void {
  }

  /**
  * add Todo
  *
  * @para {HTMLInputElement} inputRef
  * @memberof TodoListComponent
  */
  addTodo(inputRef: HTMLInputElement): void {
    // console.log(inputRef.value);

    const todo = inputRef.value.trim();
    // trim() removes whitespace from both ends of a string

    if (todo) {
      this.todoListService.add(todo);
      inputRef.value = '';
    }
  }

  /**
  * delete Todo
  *
  * @param {number} index
  * @memberof TodoListComponent
  */
  remove(index: number): void {
    this.todoListService.remove(index);
  }

  /**
   * remove completed Todos
   *
   * @memberof TodoListComponent
   */
  removeCompleted(): void {
    this.todoListService.removeCompleted();
  }

  /**
  * start edit mode
  *
  * @param {Todo} todo
  * @memeberof TodoListComponent
  */
  edit(todo: Todo): void {
    // todo.editable = true;
    todo.setEditable(true);
  }

  /**
  * update Todo
  *
  *  @param {Todo} todo
  *  @param {string} newTitle
  *  @memberof TodoListComponent
  */
  update(todo: Todo, newTitle: string): void {
    if (!todo.editing) {
      return;
    }
    const title = newTitle.trim();

    if (title) {
      todo.setTitle(title);
      todo.editable = false;
    } else {
      const index = this.getList().indexOf(todo);
      if (index !== -1) {
        this.remove(index);
      }
    }
  }

  /**
  * quit edit mode
  *
  * @param {Todo} todo
  * @memberof TodoListComponent
  */
  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }

  /**
   * get list
   *
   * @returns {Todo[]}
   * @memberof TodoListComponent
   */
  getList(): Todo[] {

    let list: Todo[] = [];
    switch (this.status) {

      case TodoStatusType.Active:
        list = this.getUncompletedList();
        break;

      case TodoStatusType.Completed:
        list = this.getCompletedList();
        break;

      default:
        list = this.todoListService.getList();
        break;

    }

    return list;
  }

  /**
   * get All list
   *
   * @returns {Todo[]}
   * @memberof TodoListComponent
   */
  getAllList(): Todo[] {
    return this.todoListService.getList();
  }

  /**
  * get uncomplete list
  *
  * @return {Todo[]}
  * @memberof TodoListComponent
  */
  getUncompletedList(): Todo[] {
    return this.todoListService.getWithCompleted(false);
  }

  /**
   * get completed list
   *
   * @returns {Todo[]}
   * @memberof TodoListComponent
   */
  getCompletedList(): Todo[] {
    return this.todoListService.getWithCompleted(true);
  }

  /**
   * set status
   *
   * @param {number} status
   * @memberof TodoListCompionent
   */
  setStatus(status: number): void {
    this.status = status;
  }

  /**
   * check status
   *
   * @param {number} status
   * @returns {boolean}
   * @memberof TodoListComponent
   */
  checkStatus(status: number): boolean {
    return this.status === status;
  }

  /**
   * check All completed?
   *
   * @returns {boolean}
   * @memberof TodoListcomponent
   */
  allCompleted(): boolean{
    return this.getAllList().length === this.getCompletedList().length;
  }

  /**
   * set All completed/uncompleted
   *
   * @param {boolean} completed
   * @memberof TodoListComponent
   */
  setAllTo(completed: boolean): void {
    this.getAllList().forEach((todo) => {
      todo.setCompleted(completed);
    });
  }
}
