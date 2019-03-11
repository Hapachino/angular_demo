import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recipes = false;
  shopping = false;

  renderComponent(link: string) {
    switch(link) {
      case 'recipes': 
        this.shopping = false;
        this.recipes = true;
        break;
      case 'shopping':
        this.recipes = false;
        this.shopping = true;
    }
  }
}
