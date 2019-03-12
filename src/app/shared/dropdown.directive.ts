import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostListener('click') onClick() {
    if (this.class.includes('open')) {
      this.class = "btn-group";
    } else {
      this.class = "btn-group open";
    }
  }

  @HostBinding('class') class: string = "btn-group";
  
  constructor() {}
}
