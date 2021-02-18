import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsersComponent } from './userslist/users/users.component';
import { UserComponent } from './userslist/user/user.component';
import { AddnewuserComponent } from './addnewuser/addnewuser.component';
import { MainpoststodosComponent } from './postsandtodos/mainpoststodos/mainpoststodos.component';
import { TodosComponent } from './postsandtodos/todos/todos.component';
import { PostsComponent } from './postsandtodos/posts/posts.component';
import { AddpostComponent } from './postsandtodos/addpost/addpost.component';
import { AddtodoComponent } from './postsandtodos/addtodo/addtodo.component';


const appRouters : Routes = [
  {path : "mainpage" , component :  MainpageComponent},
  {path: "AddNewUser", component: AddnewuserComponent},
  {path : "mainpoststodos/:id" , component : MainpoststodosComponent},
  {path : "mainpoststodos/addtodo/:id" , component : AddtodoComponent},
  {path : "mainpoststodos/addpost/:id" , component : AddpostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UsersComponent,
    UserComponent,
    AddnewuserComponent,
    MainpoststodosComponent,
    TodosComponent,
    PostsComponent,
    AddpostComponent,
    AddtodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouters),
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
