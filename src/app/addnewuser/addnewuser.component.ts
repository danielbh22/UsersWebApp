import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UsersUtilsService } from '../users-utils.service';

@Component({
  selector: 'app-addnewuser',
  templateUrl: './addnewuser.component.html',
  styleUrls: ['./addnewuser.component.css']
})
export class AddnewuserComponent implements OnInit {

  user : User = new User();

  sub : Subscription;

  constructor(private utils : UsersUtilsService) { }

  ngOnInit(): void {
  }

  save(isValid : boolean)
  {
    if(isValid)
    {
    this.sub = this.utils.addNewUser(this.user).subscribe( status => alert(status) );
    }
  }

  ngOnDestroy(): void {
    if(this.sub !=null)
    {
      this.sub.unsubscribe()
    }

  }

}
