import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() linkClicked = new EventEmitter<string>();

  onLinkClicked(link: string) {
    this.linkClicked.emit(link);
  }
}
