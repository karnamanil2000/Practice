import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/list-users/list-users.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) { }

  listUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl + 'users');
  }
  viewUser(id: string) {
    return this.httpClient.get(this.baseUrl + 'users/' + id );
  }
  addUser(userData: any) {
    return this.httpClient.post(this.baseUrl + 'users', userData);
  }
  deleteUser(id: any) {
    return this.httpClient.delete(this.baseUrl + 'users/' + id);
  }
  updateUser(id: any, userData: any) {
    return this.httpClient.put(this.baseUrl + 'users/'+id, userData); 
  }
}
