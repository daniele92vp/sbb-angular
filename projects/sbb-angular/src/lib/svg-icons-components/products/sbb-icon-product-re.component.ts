import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-product-re',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><path d="M3.938 4.13H7.67c1.078 0 1.846.143 2.304.43.822.509 1.233 1.376 1.233 2.598 0 1.525-.63 2.436-1.89 2.733.75.12 1.246.426 1.492.921.125.265.207.554.246.866.039.313.074.994.105 2.046.016.526.047.89.094 1.092s.15.445.311.727h-2.42a1.84 1.84 0 0 1-.214-.715c-.034-.288-.066-.912-.097-1.87-.022-.629-.058-1.066-.11-1.31a1.246 1.246 0 0 0-.296-.602.955.955 0 0 0-.461-.265c-.182-.047-.46-.07-.835-.07h-.905v4.832H3.938V4.129zm2.289 1.686v3.286h.897c.552 0 .947-.088 1.187-.265.395-.292.593-.77.593-1.437 0-.562-.14-.966-.418-1.213s-.732-.371-1.362-.371h-.897zM12.346 4.13h6.378v1.889h-4.09v2.693h3.84v1.858h-3.84v3.083h4.254v1.89h-6.542V4.129z"/></svg>',
  styles: []
})
export class IconProductReComponent {
  constructor() { }

  @Input() svgClass = '';
}
