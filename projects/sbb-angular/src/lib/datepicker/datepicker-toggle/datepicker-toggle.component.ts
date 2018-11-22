import {
  Component,
  Input,
  ChangeDetectorRef,
  Attribute,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core';
import { Subscription, of, merge } from 'rxjs';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DatepickerIntlService } from '../datepicker-intl.service';

@Component({
  selector: 'sbb-datepicker-toggle',
  templateUrl: './datepicker-toggle.component.html',
  styleUrls: ['./datepicker-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerToggleComponent<D> implements OnDestroy, OnChanges, AfterContentInit {

  private stateChanges = Subscription.EMPTY;
  /** Datepicker instance that the button will toggle. */
  // tslint:disable-next-line:no-input-rename
  @Input('for') datepicker: DatepickerComponent<D>;

  /** Tabindex for the toggle. */
  @Input() tabIndex: number | null;

  /** Whether the toggle button is disabled. */
  @Input()
  get disabled(): boolean {
    return this._disabled === undefined ? this.datepicker.disabled : !!this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean;

  constructor(public intl: DatepickerIntlService,
    private changeDetectorRef: ChangeDetectorRef,
    @Attribute('tabindex') defaultTabIndex: string) {

    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
  }

  @HostBinding('class.sbb-datepicker-toggle')
  sbbDatepickerToggleCssClass = true;

  @HostBinding('attr.tabindex')
  tabindex = null;

  @HostBinding('class.sbb-datepicker-toggle-active')
  get datepickerToggleActive() {
    return this.datepicker && this.datepicker.opened;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.datepicker) {
      this.watchStateChanges();
    }
  }

  ngOnDestroy() {
    this.stateChanges.unsubscribe();
  }

  ngAfterContentInit() {
    this.watchStateChanges();
  }

  open(event: Event): void {
    if (this.datepicker && !this.disabled) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }

  private watchStateChanges() {
    const datepickerDisabled = this.datepicker ? this.datepicker.disabledChange : of();
    const inputDisabled = this.datepicker && this.datepicker.datepickerInput ?
      this.datepicker.datepickerInput.disabledChange : of();
    const datepickerToggled = this.datepicker ?
      merge(this.datepicker.openedStream, this.datepicker.closedStream) :
      of();

    this.stateChanges.unsubscribe();
    this.stateChanges = merge(
      this.intl.changes,
      datepickerDisabled,
      inputDisabled,
      datepickerToggled
    ).subscribe(() => this.changeDetectorRef.markForCheck());
  }

}
