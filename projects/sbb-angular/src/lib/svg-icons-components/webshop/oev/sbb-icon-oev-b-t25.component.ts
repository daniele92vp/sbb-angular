import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-oev-b-t25',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><g><path d="M6.8 4.3l10.7-1.8v.6L6.8 4.8v-.5zM5.3 4.5v.6l-2.8.5V5l2.8-.5zM3.9 14.2v-3.1c0-.5.4-.9.9-.9.3 0 .6.1.8.4l1.6 2.2c.1.1.1.2.1.2 0 .2-.2.4-.4.4-.1 0-.3-.1-.3-.2l-.6-.9v1.3h1.7c.3 0 .6.3.6.6v2.6c0 .3-.3.6-.6.6s-.6-.3-.6-.6v-2.1H4.6c-.4.1-.7-.2-.7-.5"/><path d="M5.7 3.7h.8V7l-3.2.6v7.9h3.2v.8h-4V6.9l3.2-.5V3.7z"/><path d="M5 9.8c-.5 0-.9-.4-.9-.9S4.5 8 5 8s.9.4.9.9-.4.9-.9.9"/></g></svg>',
  styles: []
})
export class IconOevBT25Component {
  constructor() { }

  @Input() svgClass = '';
}
