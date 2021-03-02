import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { UsersUtilsService } from 'src/app/users-utils.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isVisible : boolean = false;
  isOrange : boolean = false;
  @Input()
  userData : User;

  activatedRoute = "";

  sub1 : Subscription;
  sub2 : Subscription;

  constructor(private utils : UsersUtilsService, private ar :ActivatedRoute, public router : Router) { }

  ngOnInit(): void {


  }

  delete()
  {
    this.sub1 = this.utils.deletetUser(this.userData._id).subscribe(() =>
    {
      alert('User Deleted !');
      //this.router.navigate([""])
    })
  }

  update()
  {
    this.sub2 = this.utils.updateUser(this.userData._id, this.userData)
    .subscribe( status => alert("User Updated !"));

  }

  showOrHide()
  {
    this.isVisible = !this.isVisible;
  }


  TasksStatus(u: User)
  {
    let tasksB : boolean;

    let allTasks = [];

    u.tasks.forEach(t => allTasks.push(t.completed));
    tasksB = allTasks.every(x=>x===true)

    return tasksB

  }

  ngOnDestroy(): void {
    if(this.sub1 !=null)
    {
      this.sub1.unsubscribe()
    }

    if(this.sub2 !=null)
    {
      this.sub2.unsubscribe()
    }

  }

 }
