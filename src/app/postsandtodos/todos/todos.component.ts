import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { UsersUtilsService } from 'src/app/users-utils.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {



  @Input()
  userData : User;

  constructor(private utils : UsersUtilsService, private ar :ActivatedRoute, private router : Router) { }



  ngOnInit(): void {

  }

  taskCompleted(id :string)
  {

    let task = this.userData.tasks.find(x => x._id == id);

    task.completed = true ;
     this.utils.updateUser(this.userData._id,this.userData)
       .subscribe(status =>
         {
           alert(status);
           this.router.navigate(['mainpoststodos/',this.userData._id]);

         });

  }


}
