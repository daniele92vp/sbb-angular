import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-mi',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13"><path d="M3.2 11.7V7.5c-.8-.1-1.6-.4-2.1-.9S.2 5.6.2 5C.1 4.5 0 4.1 0 3.8V0h7.8v3.8c0 .2-.1.6-.1 1.2-.1.6-.5 1.1-1 1.6s-1.3.8-2.1.9v4.2h3.2V13H0v-1.3h3.2z"/></svg>',
  styles: []
})
export class IconServiceMiComponent {
  constructor() { }

  @Input() svgClass = '';
}
