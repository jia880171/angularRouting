// model for todo
export class Todo {

  private title = '';

  private completed = false;

  private editMode = false;

  constructor(title: string){
    this.title = title || '';
  }

  set editable(bool: boolean) {
    this.editMode = bool;
  }

  setEditable(bool: boolean) {
    this.editMode =bool;
  }

  get editing(): boolean {
    return this.editMode;
  }

  get done(): boolean {
    return this.completed;
  }

  setTitle(title: string): void{
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }

  toggleCompletion(): void {
    this.completed = !this.completed;
  }

  /**
   * set Completed/unCompleted
   *
   * @param {boolean} completed
   * @memberof Todo
   */
  setCompleted(completed: boolean): void {
    this.completed = completed;
  }

}
