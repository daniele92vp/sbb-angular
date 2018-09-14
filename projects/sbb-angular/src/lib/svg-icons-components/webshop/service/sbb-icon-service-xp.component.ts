import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-xp',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 13"><path d="M6 0l1.9 4.5L11.5 0h3.1L9.2 6.2l3 6.8H9.3l-2-5.2L3.2 13H0l6-7.1L3.2 0m14.5 6h.9c1.4 0 2.9-.7 2.9-2.4 0-1.3-1.1-1.6-2.2-1.6h-.8c.1 0-.8 4-.8 4zm-1.5 7h-2.6l2.8-13h2.2c2.4 0 5.7.1 5.7 3.4 0 3.1-2.6 4.7-5.5 4.7h-1.5L16.2 13z"/></svg>',
  styles: []
})
export class IconServiceXpComponent {
  constructor() { }

  @Input() svgClass = '';
}
