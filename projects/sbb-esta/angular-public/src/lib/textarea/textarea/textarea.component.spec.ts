import { TextFieldModule } from '@angular/cdk/text-field';
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { configureTestSuite } from 'ng-bullet';

import { typeInElement } from '../../_common/testing/type-in-element';

import { TextareaComponent } from './textarea.component';

@Component({
  selector: 'sbb-textarea-test',
  template: `
    <sbb-textarea
      [(ngModel)]="textArea1"
      [minlength]="minlength"
      [maxlength]="maxlength"
      [required]="required"
      [readonly]="readonly"
      [disabled]="disabled"
    ></sbb-textarea>
  `
})
class TextareaTestComponent {
  required: boolean;
  readonly: boolean;
  disabled: boolean;
  minlength: number;
  maxlength: number;
  textArea1: string;
}

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [TextFieldModule],
      declarations: [TextareaComponent]
    }).overrideComponent(TextareaComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('TextareaComponent behaviour', () => {
  let component: TextareaTestComponent;
  let fixture: ComponentFixture<TextareaTestComponent>;
  let innerComponent: DebugElement;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [TextFieldModule, FormsModule],
      declarations: [TextareaTestComponent, TextareaComponent]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaTestComponent);
    component = fixture.componentInstance;
    innerComponent = fixture.debugElement.query(By.directive(TextareaComponent));
    fixture.detectChanges();
  });

  it('should be required', () => {
    component.required = true;
    const textarea = innerComponent.query(By.css('textarea'));
    typeInElement('', textarea.nativeElement);
    fixture.detectChanges();
    expect(innerComponent.classes['ng-invalid'] && innerComponent.classes['ng-dirty']).toBeTruthy();
    expect(
      getComputedStyle(fixture.debugElement.nativeElement.querySelector('.ng-invalid'))
        .borderTopColor
    ).toBe('rgb(235, 0, 0)');
  });

  it('should be readonly attribute', () => {
    component.readonly = true;
    fixture.detectChanges();
    expect(innerComponent.attributes['ng-reflect-readonly']).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('[readonly]')).toBeTruthy();
  });

  it('should be disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(innerComponent.attributes['ng-reflect-disabled']).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector(':disabled')).toBeTruthy();
    expect(
      getComputedStyle(fixture.debugElement.nativeElement.querySelector(':disabled')).borderTopColor
    ).toBe('rgb(210, 210, 210)');
  });

  it('should have a min length attribute', () => {
    component.minlength = 20;
    const textarea = innerComponent.query(
      e => e.nativeElement.nodeName.toLowerCase() === 'textarea'
    );
    typeInElement('SBB', textarea.nativeElement);
    fixture.detectChanges();
    expect(innerComponent.attributes['minlength']).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector('.ng-invalid')).toBeTruthy();
    expect(
      getComputedStyle(fixture.debugElement.nativeElement.querySelector('.ng-invalid'))
        .borderTopColor
    ).toBe('rgb(235, 0, 0)');
  });

  // See https://github.com/SchweizerischeBundesbahnen/sbb-angular/issues/106
  it('should update the inner value twice', async () => {
    const textarea = fixture.debugElement.query(By.css('textarea'))
      .nativeElement as HTMLTextAreaElement;
    typeInElement('test1', textarea);
    fixture.detectChanges();
    expect(component.textArea1).toEqual('test1');
    component.textArea1 = 'test2';
    fixture.detectChanges();
    await fixture.whenStable();
    expect(textarea.value).toEqual('test2');
    typeInElement('test3', textarea);
    fixture.detectChanges();
    expect(component.textArea1).toEqual('test3');
    component.textArea1 = 'test4';
    fixture.detectChanges();
    await fixture.whenStable();
    expect(textarea.value).toEqual('test4');
  });
});

describe('TextareaComponent digits counter', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [TextFieldModule],
      declarations: [TextareaComponent]
    }).overrideComponent(TextareaComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    component.maxlength = 20;
    component.textContent = 'SBB';
    fixture.detectChanges();
  });

  it('should appear on the bottom right', () => {
    const counterDiv = fixture.debugElement.query(By.css('div'));
    expect(counterDiv).toBeTruthy();
  });

  it('should have a 16 value', async () => {
    component.writeValue(component.textContent + ' ');
    fixture.detectChanges();
    const counterDiv = fixture.debugElement.query(By.css('div'));
    expect(counterDiv.nativeElement.textContent.trim()).toBe('Noch 16 Zeichen');
  });

  it('shoud disappear', () => {
    component.maxlength = null;
    fixture.detectChanges();
    const counterDiv = fixture.debugElement.query(By.css('div'));
    expect(counterDiv).toBeNull();
  });
});
