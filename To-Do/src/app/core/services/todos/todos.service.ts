import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoBody, Todos } from '../../model/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private _http: HttpClient) {}

  getTodos(credintials: any): Observable<Todos[]> {
    const header = new HttpHeaders({
      Authorization: `basic ${credintials}`,
    });

    console.log(`http://localhost:4000/todos`, credintials);

    return this._http.get<Todos[]>(`http://localhost:4000/todos`, {
      headers: header,
    });
  }

  postTodos(credintials: any, body: ToDoBody) {
    const header = new HttpHeaders({
      Authorization: `basic ${credintials}`,
    });
    return this._http.post<ToDoBody>(`http://localhost:4000/todos`, body, {
      headers: header,
    });
  }

  deleteTodo(credintials: any, id: number) {
    const header = new HttpHeaders({
      Authorization: `basic ${credintials}`,
    });
    return this._http.delete(`http://localhost:4000/todos/${id}`, {
      headers: header,
    });
  }

  UpdateTodo(credintials: any, id: number, body: ToDoBody) {
    const header = new HttpHeaders({
      Authorization: `basic ${credintials}`,
    });
    return this._http.patch(`http://localhost:4000/todos/${id}`, body, {
      headers: header,
    });
  }

  ChangeStatus(credintials: any, id: number) {
    const header = new HttpHeaders({
      Authorization: `basic ${credintials}`,
    });
    return this._http.put(
      `http://localhost:4000/todos/${id}`,
      {},
      {
        headers: header,
      }
    );
  }
}
