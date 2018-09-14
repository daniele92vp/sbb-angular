import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-comfort',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 9V6c0-1.654-1.346-3-3-3H8C6.346 3 5 4.346 5 6v3c-1.654 0-3 1.346-3 3 0 1.28.82 2.41 2 2.829v3.17c0 1.103.897 2 2 2v2h1v-2h10v2h1v-2c1.103 0 2-.897 2-2v-3.17c1.18-.418 2-1.549 2-2.829 0-1.654-1.346-3-3-3zM6 6c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v3.172A3.005 3.005 0 0 0 16 12v2H8v-2a3.005 3.005 0 0 0-2-2.828V6zm10 9v1H8v-1h8zm3.4-1.04l-.4.082V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3.958l-.4-.082A2.006 2.006 0 0 1 3 12c0-1.103.897-2 2-2s2 .897 2 2v5h10v-5c0-1.103.897-2 2-2s2 .897 2 2c0 .947-.673 1.771-1.6 1.96z"/></svg>',
  styles: []
})
export class IconComfortComponent {
  constructor() { }

  @Input() svgClass = '';
}
