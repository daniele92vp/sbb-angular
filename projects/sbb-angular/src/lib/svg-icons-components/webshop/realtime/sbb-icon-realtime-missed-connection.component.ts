import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-realtime-missed-connection',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11 11.5c0 .6-.4 1-.9 1s-.9-.5-.9-1v-4c0-.6.4-1 .9-1s.9.4.9 1v4zm-1 4c-.5 0-.9-.5-.9-1s.4-1 .9-1 .9.5.9 1-.4 1-.9 1zm7.4.5L10.9 3c-.2-.3-.5-.5-.9-.5-.3 0-.7.2-.8.5L2.6 16c-.2.3-.2.7 0 1 .2.3.5.5.8.5h13.1c.3 0 .6-.2.8-.5.2-.3.2-.7.1-1z"/></svg>',
  styles: []
})
export class IconRealtimeMissedConnectionComponent {
  constructor() { }

  @Input() svgClass = '';
}
