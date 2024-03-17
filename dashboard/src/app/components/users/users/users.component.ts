import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IRegister } from '../../../DataTypes/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users :IRegister[] = []

  constructor(
    private userService : UsersService,
  ){}

    ngOnInit() : void {
    this.getAll()
  }

  getAll() {
    this.userService.getAllUsers().subscribe(
      (response) => {
        if (response.data) {
          this.users = response.data;
          console.log(this.users);
        }
      },
      (error) => {
        console.error('Error in getAll:', error);
      }
    );
  }
  

}
