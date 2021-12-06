import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

export interface User {
  id: number;
  userName: string;
  email: string;
}

// const ELEMENT_DATA: User[] = [
//   {id: 1, userName: 'Hydrogen', email: 'hydrogen@gmail.com'},
// ];


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userName', 'email', 'actions'];
  //dataSource = ELEMENT_DATA;
  listUsers: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.listUsers().subscribe(data => {
      this.listUsers = data;
      //this.dataSource = data;
    });
  }

}
