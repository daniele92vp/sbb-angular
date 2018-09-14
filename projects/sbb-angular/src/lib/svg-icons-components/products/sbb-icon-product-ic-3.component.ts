import { Component, Input } from '@angular/core';
@Component({
  selector: 'sbb-icon-product-ic-3',
  // tslint:disable-next-line:max-line-length
  template: '<svg [class]="svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 20"><path d="M36.696 7.88c.027-.95.261-1.745.704-2.389.717-1.033 1.796-1.55 3.236-1.55 1.107 0 2 .282 2.681.846.733.612 1.1 1.403 1.1 2.373 0 .58-.144 1.08-.431 1.5-.288.418-.677.702-1.167.85.622.142 1.114.458 1.475.949.361.49.542 1.083.542 1.78 0 1.144-.422 2.08-1.266 2.808-.78.675-1.766 1.012-2.958 1.012-1.292 0-2.317-.372-3.073-1.115-.757-.744-1.135-1.748-1.135-3.014v-.15h2.222c0 .712.169 1.261.507 1.649.337.388.814.581 1.431.581.617 0 1.092-.182 1.424-.545a1.78 1.78 0 0 0 .459-1.227c0-.57-.195-1.02-.585-1.352-.322-.274-.818-.412-1.487-.412-.19 0-.378.011-.562.032v-1.7c.137.01.269.015.395.015 1.33 0 1.994-.493 1.994-1.479 0-.432-.145-.782-.435-1.048-.29-.266-.673-.4-1.147-.4-.543 0-.963.17-1.258.507-.295.337-.454.83-.475 1.479h-2.19zM9.249 4.2h4.07L8.284 15.8H4.197zM16 4.2h14.443l-1.496 3.445H18.632l-2.048 4.71h10.32L25.409 15.8H10.965l5.034-11.6z"/></svg>',
  styles: []
})
export class IconProductIc3Component {
  constructor() { }

  @Input() svgClass = '';
}
