import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  collapse = false;
  @Output() navSelected = new EventEmitter<string>();

  onCollapseButton() {
    this.collapse = !this.collapse;
  }

  onWindowResize() {
    this.collapse = false; // reset collapse
  }

  onNavSelection(name: string) {
    this.navSelected.emit(name);
  }
}
