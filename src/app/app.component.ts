import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedContent = 'recipes';
  title = 'EShop';
  onNavSelected(pageName: string) {
    this.selectedContent = pageName;
  }
}
