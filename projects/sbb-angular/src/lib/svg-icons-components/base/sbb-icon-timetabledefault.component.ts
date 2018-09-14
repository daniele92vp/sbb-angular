import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-timetabledefault',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.3 15.7c.2 0 .3-.1.3-.3l-.3-1.9h-3.2v2.2h3.2zM10.6 6.2L12.3 5 10 3.7 7.7 5l1.8 1.2h1.1zm3.3 3.3c0 .2.1.3.3.3h1.6c.2 0 .3-.1.3-.3l-.3-2.4c0-.2-.2-.3-.3-.3h-1.3c-.2 0-.3.1-.3.3v2.4zM9.7 6.8H2.5v-.6h5.9L6.5 5 10 3l3.5 2-1.9 1.2h3.8c.5 0 .9.3.9.8l.8 5.9H2.5V9.8h7.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H2.5v-.6h7.2c.2 0 .3-.1.3-.3S9.9 8 9.7 8H2.5v-.6h7.2c.2 0 .3-.1.3-.3 0-.1-.1-.3-.3-.3zM6.5 15c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6c-.9 0-1.6-.7-1.6-1.6M10.2 15c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6M2.5 2.8h15v-.3h-15v.3zM2.5 17.5h15v-.6h-15v.6zM2.5 13.6l3.4-.1v2.2H2.5v-2.1z"/></svg>',
  styles: []
})
export class IconTimetabledefaultComponent {
  constructor() { }

  @Input() svgClass = '';
}
