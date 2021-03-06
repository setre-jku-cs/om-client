import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['../../../style.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.logout();
  }
}
