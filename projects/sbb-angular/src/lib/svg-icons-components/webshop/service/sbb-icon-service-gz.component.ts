import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-service-gz',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 13"><path d="M11.1 2.9c-1-.6-2.2-.9-3.5-.9-3.1 0-5 2.4-5 5.4 0 2 1.4 3.7 3.5 3.7.6 0 1 0 1.2-.1L8 7.7H5.5l.4-2H11l-1.4 6.9c-.8.1-2.2.4-3.4.4C2.5 13 0 11.3 0 7.4 0 2.8 3 0 7.5 0c1.4 0 2.9.2 4.2.7l-.6 2.2zM14.3.2H23l-.4 2-7.6 8.6h5.7l-.4 2h-8.8l.4-2 7.6-8.6H14"/></svg>',
  styles: []
})
export class IconServiceGzComponent {
  constructor() { }

  @Input() svgClass = '';
}
