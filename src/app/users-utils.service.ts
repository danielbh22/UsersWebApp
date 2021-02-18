import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersUtilsService {

  constructor(private http : HttpClient) { }

  getAllUsers()
  {
    return this.http.get<User[]>("http://localhost:8000/api/users");
  }

  getUser(id : string)
  {
    return this.http.get<User>("http://localhost:8000/api/users/" + id);
  }

  addNewUser(user : User)
  {
    return this.http.post("http://localhost:8000/api/users",user);
  }

  updateUser(id : string, user : User)
  {
    return this.http.put("http://localhost:8000/api/users/" + id, user)

  }

  deletetUser(id : string)
  {
    return this.http.delete("http://localhost:8000/api/users/" + id)

  }

  async searchUser(s : string )
  {
    let allUsers = await this.http.get<User[]>("http://localhost:8000/api/users").toPromise();
    let chars = s.toLowerCase();

    let result = [];

    result = allUsers.filter(user => user.name.toLowerCase().includes(chars) || user.email.toLowerCase().includes(chars))



    return result
  }
}
