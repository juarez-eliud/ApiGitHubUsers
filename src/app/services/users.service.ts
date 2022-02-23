import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers( ) {
    return this.http.get<User[]>('https://api.github.com/users');
  }

  getFollowers(followers_url: string){
    return this.http.get<User[]>(followers_url);
  }

}
