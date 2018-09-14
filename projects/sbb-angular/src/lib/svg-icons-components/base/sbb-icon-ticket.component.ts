import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-ticket',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16.723H5.667v-1.056H12v1.056zm0-3.167H5.667v1.056H12v-1.056zM20.444 3v16.889h-6.333V22H3.556V5.111h6.333V3h10.555zm-7.388 3.167H4.611v14.778h8.444V6.167zm6.333-2.111h-8.444v1.056h3.167v6.333h4.222V12.5h-4.222v1.056h4.222v1.056h-4.222v4.222h5.277V4.056zm-1.9 2.322v2.956h.844V5.111h-.739v.211c0 .106-.104.211-.104.316-.106.106-.212.211-.423.211h-.527v.528h.949zM9.15 11.444H12v-.739h-1.794c0-.105.105-.211.211-.211l.422-.317.317-.211c.211-.105.422-.317.633-.528.106-.316.211-.527.211-.844 0-.316-.105-.739-.422-.95-.317-.317-.634-.422-1.056-.422-.528 0-.95.211-1.161.633-.106.317-.211.528-.211.845h.739c0-.21 0-.316.106-.528l.105-.106c.211-.211.633-.211.844 0 .106.105.106.317.106.423 0 .21-.106.422-.211.633-.211.211-.528.422-.739.633a3.234 3.234 0 0 0-.845.845c-.105.317-.105.528-.105.844z"/></svg>',
  styles: []
})
export class IconTicketComponent {
  constructor() { }

  @Input() svgClass = '';
}
