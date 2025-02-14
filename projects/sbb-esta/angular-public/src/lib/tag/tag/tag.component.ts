import { FocusMonitor } from '@angular/cdk/a11y';
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Inject,
  InjectionToken,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';

import { CheckboxBase, SbbCheckboxChange } from '../../checkbox/checkbox/checkbox-base';
import { TagChange } from '../tag.model';

/**
 * Injection token used to provide the parent component to TagComponent.
 */
export const TAGS_CONTAINER = new InjectionToken<any>('SBB_TAG_CONTAINER');

@Component({
  selector: 'sbb-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TagComponent extends CheckboxBase implements OnInit, OnChanges, OnDestroy {
  /** @docs-private  */
  @HostBinding('class.sbb-tag')
  sbbTagClass = true;

  /**
   * Link mode of a tag.
   */
  get linkMode() {
    return this._linkMode;
  }
  set linkMode(value: boolean) {
    this._linkMode = value;
    this.active = value;
  }
  private _linkMode = false;

  /**
   * Label of the tag.
   */
  @Input()
  label: string;
  /**
   * Amount of result found.
   */
  @Input()
  amount: number;

  /**
   * Event generated on tag change.
   * @deprecated Use change event instead.
   */
  // TODO: Remove for Angular 9.
  @Output() readonly tagChange = new EventEmitter<TagChange>();

  /**
   * A subject on a state change of a tag.
   * @deprecated No longer required.
   */
  // TODO: Remove for Angular 9.
  readonly stateChange$ = new Subject<void>();
  /**
   * A subject on tag checking.
   */
  // TODO: Check usage and rename without $ for Angular 9.
  readonly tagChecking$ = new Subject<any>();

  /** Refers if a tag is active. */
  @HostBinding('class.sbb-tag-active')
  get active() {
    return this._active || (this.checked && !this.disabled);
  }
  set active(value: boolean) {
    this._active = value;
    this._changeDetectorRef.markForCheck();
  }
  private _active = false;

  constructor(
    @Optional() @Inject(TAGS_CONTAINER) private _tagsContainer: any,
    private _zone: NgZone,
    changeDetectorRef: ChangeDetectorRef,
    focusMonitor: FocusMonitor,
    elementRef: ElementRef<HTMLElement>,
    @Attribute('tabindex') tabIndex: string
  ) {
    super(changeDetectorRef, focusMonitor, elementRef, tabIndex, 'tag');

    this.change.subscribe((e: SbbCheckboxChange) => {
      this.tagChecking$.next(e.checked);
      this.tagChange.emit(new TagChange(this, e.checked));
    });
    this._zone.onStable
      .pipe(first())
      .subscribe(() => this._zone.run(() => this.tagChecking$.next(this.checked)));
  }

  ngOnInit() {
    if (!this._tagsContainer) {
      this.linkMode = true;
    }
  }

  ngOnChanges() {
    this.stateChange$.next();
  }

  ngOnDestroy() {
    this.tagChecking$.complete();
    this.stateChange$.complete();
  }
  /**
   * Set a tag to checked status.
   * @param checked Value of tag checked.
   * @deprecated Use the checked property.
   */
  setTagChecked(checked: boolean) {
    this.checked = checked;
  }
}
