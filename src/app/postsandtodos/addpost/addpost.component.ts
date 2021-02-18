import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/user';
import { UsersUtilsService } from 'src/app/users-utils.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  userid : string;
  sub1 : Subscription;
  sub2  :Subscription;

  userData : User = new User();


  constructor(private router : Router, private utils : UsersUtilsService, private ar : ActivatedRoute) { }

  add(t : string , b : string)
  {
    let newPost : any = { title : t ,body : b};
    this.userData.posts.push(newPost);

    this.utils.updateUser(this.userid,this.userData)
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

  }
}
