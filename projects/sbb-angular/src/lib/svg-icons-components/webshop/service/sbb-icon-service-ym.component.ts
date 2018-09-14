import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-ym',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 13"><path d="M3.1 7.6L0 0h2.8l1.9 5.5L8.9 0h3L5.7 7.6 4.5 13H1.9M13.8 0h4.3l.9 9.4L24.1 0h4.3l-2.8 13h-2.8l2.5-10.8L19.4 13h-2.5l-1-10.8L13.5 13H11"/></svg>',
  styles: []
})
export class IconServiceYmComponent {
  constructor() { }

  @Input() svgClass = '';
}
