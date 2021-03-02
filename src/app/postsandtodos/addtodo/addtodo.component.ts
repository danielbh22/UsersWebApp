import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { UsersUtilsService } from 'src/app/users-utils.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  userid : string;
  sub1 : Subscription;
  sub2 : Subscription;
  sub3 : Subscription;

  userData : User = new User();


  constructor(private router : Router, private utils : UsersUtilsService, private ar : ActivatedRoute) { }

  add(t : string )
  {
    let newTask : any = { title : t ,completed : false};
    this.userData.tasks.push(newTask);

    this.sub3 = this.utils.updateUser(this.userid,this.userData)
      .subscribe(status =>
        {
          alert(status);
          this.router.navigate(['/mainpoststodos',this.userData._id]);

        })
  }

  ngOnInit(): void {
    this.sub1 = this.ar.params.subscribe(data =>
      {
        this.userid = data["id"];
        this.sub2 = this.utils.getUser(this.userid)
          .subscribe(user => this.userData = user);

      })
  }
  ngOnDestroy()
  {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();

    if(this.sub3 != null)
    {
      this.sub3.unsubscribe();
    }

  }
}
