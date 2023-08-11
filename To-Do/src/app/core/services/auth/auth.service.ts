import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../../model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  getUsers(): Observable<Login[]> {
    return this._http.get<Login[]>('http://localhost:4000/users');
  }
}
