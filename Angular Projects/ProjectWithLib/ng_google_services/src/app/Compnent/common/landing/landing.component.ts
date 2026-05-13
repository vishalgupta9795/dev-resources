import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit 
{
  
  constructor(private userServ: UsersService) {
  }

  ngOnInit(): void {
    this.GetUser();
  }

  GetUser() {
    this.userServ.getUsers().subscribe(users => {
      console.log(users);
    });
  }
}
