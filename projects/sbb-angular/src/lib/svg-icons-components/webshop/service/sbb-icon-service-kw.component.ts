import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-kw',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 13"><path d="M5.4 0L4.3 5.1 9.5 0h3.6L6.6 5.9l4.2 7.1H7.6L4 6.4 2.6 13H0L2.8 0m26.6 0l-4.6 10-.1-10h-3.5l-4.3 10-.5-10h-2.6l.8 13h3.2l4.6-10.4.2 10.4h3.3l6.2-13"/></svg>',
  styles: []
})
export class IconServiceKwComponent {
  constructor() { }

  @Input() svgClass = '';
}
