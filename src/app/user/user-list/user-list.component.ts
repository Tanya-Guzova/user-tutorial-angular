import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
//declare a property to store the response
  users: User[] = [];
  constructor(
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
    this.usersvc.getAll().subscribe(
      res => {console.log (res);
      this.users = res as User[];},
      err => {console.error(err);}
      
    )
  }

}
