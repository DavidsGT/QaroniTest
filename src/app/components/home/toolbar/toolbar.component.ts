import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() onToogleMenu: EventEmitter<void> = new EventEmitter();

  constructor(
    private router: Router, private userService:UserService
  ) {

  }

  hideMenu() {
    console.log("active")
    this.onToogleMenu.emit();
  }
  logout() {
    this.userService.logout();
  }
}
