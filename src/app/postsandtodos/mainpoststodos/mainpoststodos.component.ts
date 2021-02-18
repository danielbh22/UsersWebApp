import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { UsersUtilsService } from 'src/app/users-utils.service';

@Component({
  selector: 'app-mainpoststodos',
  templateUrl: './mainpoststodos.component.html',
  styleUrls: ['./mainpoststodos.component.css']
})
export class MainpoststodosComponent implements OnInit {

  userid : string ;
  userData : User = new User();
  sub1 : Subscription;
  sub2  :Subscription;

  constructor(private router : Router, private utils : UsersUtilsService, private ar : ActivatedRoute) { }

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

  }

}
