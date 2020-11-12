import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';
import { ReturnStatement } from '@angular/compiler';
const baseurl: string = "http://localhost:8080/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    //injecting the service to be used throughout the class
    private http: HttpClient
  ) { }

  getAll(): Observable<User[]> {
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }
  getByPK(id: number): Observable<User> {
    return this.http.get(`${baseurl}/${id}`) as Observable<User>;
  }
  insert(user: User): Observable<User> {
    //passing url and user body
    return this.http.post(`${baseurl}`, user) as Observable<User>;
  }
  update(user: User): Observable<User> {
    return this.http.put(`${baseurl}/${user.id}`, user) as Observable<User>;
  }
  //on delete, it is not neccessary to pass the whole user instance but, to be consistent with other maintenance functions, we pass the whole user body.
  delete(user: User): Observable<User> {
    return this.http.delete(`${baseurl}/${user.id}`) as Observable<User>;
  }
  
}
