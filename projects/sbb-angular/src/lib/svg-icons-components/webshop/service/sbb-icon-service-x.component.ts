import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-x',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13"><path d="M6 0l1.9 4.5L11.5 0h3.1L9.2 6.2l3 6.8H9.3l-2-5.2L3.2 13H0l6-7.1L3.2 0"/></svg>',
  styles: []
})
export class IconServiceXComponent {
  constructor() { }

  @Input() svgClass = '';
}
