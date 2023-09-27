import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() onToogleMenu: EventEmitter<void> = new EventEmitter();

  constructor(
    private router: Router
  ) {

  }

  hideMenu() {
    console.log("active")
    this.onToogleMenu.emit();
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
