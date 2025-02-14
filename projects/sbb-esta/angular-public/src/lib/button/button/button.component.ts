import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';

import { BaseButton } from './base-button';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'button[sbbButton], input[type=submit][sbbButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent extends BaseButton {
  /**
   * Button modes available for different purposes.
   */
  @Input() mode: 'primary' | 'secondary' | 'ghost' | 'frameless' = 'primary';

  /** @docs-private */
  @HostBinding('class.sbb-button-frameless')
  get _framelessClass() {
    return this.mode === 'frameless';
  }
}
