import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from "../entities/user.entity"
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UserService {

  private apiUrl: string = "https://api.github.com/users";

  constructor(private http: HttpClient) { }

  /*
  ** get user details by username
  */
  getUserByUsername(username:string) : Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${username}`).pipe(
        map(user=> User.fromJson(user))
    );
  }
}