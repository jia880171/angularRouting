import { Injectable } from '@angular/core';
import {Todo} from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  // private list: string[] = [];
  private list: Todo[] = [];

  constructor() { }

  /**
  *
  * add new Todo
  *
  * @param {string} title
  *
  */
  add(title: string): void {
    if( title || title.trim()) {
      this.list.push(new Todo(title) );
    }
  }

  /**
  *
  * delete Todo
  *
  * @param {number} index
  * memberof TodoListService
  */
  remove(index: number): void{
    //start from index delete 1 element
    this.list.splice(index, 1);
  }

  /**
   *
   * remove completed Todos
   *
   * @memberof TodoListService
   */
  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }

  /*
  * get todo list
  *
  * @return {Todo[]}
  * @memberof TodoListService
  *
  */
  getList(): Todo[]{
    return this.list;
  }

  /**
  * get Todos filt by completed
  *
  * @param {boolean} completed
  * @return {Todo[]}
  * @memberof TofoListService
  */
 getWithCompleted(completed: boolean): Todo[] {
   return this.list.filter(todo => todo.done === completed);
 }

}
