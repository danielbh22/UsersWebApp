import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { UsersUtilsService } from 'src/app/users-utils.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  sub : Subscription

  users : User[] = [];

  searchResult : User[] = [];

  search : string;

  constructor(private utils : UsersUtilsService) { }

  ngOnInit(): void {
    this.allUsers()
  }

  allUsers()
  {
    this.sub = this.utils.getAllUsers().subscribe(data => this.users = data);
  }


  async searchfillter()
  {
    if(this.search!="")
    {
      this.users = [];
      this.users = await this.utils.searchUser(this.search);
    }
    else
    {
      this.users = [];
      this.allUsers()
    }


  }


  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
