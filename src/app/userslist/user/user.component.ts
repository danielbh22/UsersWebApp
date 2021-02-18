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





  constructor(private utils : UsersUtilsService, private ar :ActivatedRoute, public router : Router) { }

  ngOnInit(): void {



  }

  delete()
  {
    this.utils.deletetUser(this.userData._id).subscribe(() =>
    {
      alert('User Deleted !');
      //this.router.navigate([""])
    })
  }

  update()
  {
     this.utils.updateUser(this.userData._id, this.userData)
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
 }
