import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './core//services/auth/auth.service';
import { Login } from './core//model/login';
import { AuthComponent } from 'src/app/modules/login/auth/auth.component';
import { TodosService } from './core/services/todos/todos.service';
import { Todos } from './core/model/todos';
import { AddEditDeleteComponent } from 'src/app/modules/todos/add-edit-delete/add-edit-delete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'To-Do';
  users!: Login[];
  dataLoaded: boolean = false;
  credintials: any;
  username!: string;
  avatar!: string;
  body: any;
  editedData: any;
  todoList: Todos[] = [];

  constructor(
    private _dialog: MatDialog,
    private _login: AuthService,
    private _todo: TodosService
  ) {}

  ngOnInit() {
    this._login.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

  logOut() {
    this.credintials = null;
    this.dataLoaded = false;
  }

  openLogIn() {
    const dialogRef = this._dialog.open(AuthComponent, {
      data: { users: this.users },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
      this.credintials = btoa([data.UserName, data.Password].join(':'));
      [this.username, this.avatar] = this.findUserDetails(data.UserName);
      console.log(this.username);
      console.log(btoa(this.credintials));
      this.getTodoList();
    });
  }

  findUserDetails(username: string): any {
    const user = this.users.find((u) => u.username === username);
    return [user?.name, user?.avatar];
  }

  getTodoList = () => {
    this._todo.getTodos(this.credintials).subscribe(
      (todoList) => {
        this.todoList = todoList;
        this.dataLoaded = true;
      },
      (error) => {
        this.dataLoaded = false;
      }
    );
  };

  addTask() {
    const dialogRef = this._dialog.open(AddEditDeleteComponent);
    dialogRef.afterClosed().subscribe((data) => {
      this.body = data;
      console.log(data);
      this.updateTodoList();
    });
  }

  updateTodoList(): void {
    this._todo.postTodos(this.credintials, this.body).subscribe((data) => {
      console.log(data);
      this.getTodoList();
    });
  }

  delete(id: number) {
    this._todo.deleteTodo(this.credintials, id).subscribe((data) => {
      console.log(data);
      this.getTodoList();
    });
  }

  edit(id: number) {
    const dialogRef = this._dialog.open(AddEditDeleteComponent);
    dialogRef.afterClosed().subscribe((data) => {
      this.editedData = data;
      console.log(this.editedData);
      this.editTodoList(id);
    });
  }

  editTodoList(id: number) {
    this._todo
      .UpdateTodo(this.credintials, id, this.editedData)
      .subscribe((data) => {
        console.log(data);
        this.getTodoList();
      });
  }

  changeStatus(id: number) {
    console.log(id);
    this._todo.ChangeStatus(this.credintials, id).subscribe((data) => {
      console.log(data);
      this.getTodoList();
    });
  }
}
