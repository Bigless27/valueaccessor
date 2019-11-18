import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-yes-no',
  templateUrl: './yes-no.component.html',
  styleUrls: ['./yes-no.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YesNoComponent),
      multi: true
    }
  ]
})
export class YesNoComponent implements OnInit, ControlValueAccessor {
  @Input() notes: boolean;
  public yesNoForm: FormGroup;
  public onModelChange: (v) => void;
  public onTouched: () => void = () => { };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.yesNoForm = this.fb.group({
      value: ''
    });

    if (this.notes) {
      this.yesNoForm = this.fb.group({
        value: false,
        notes: ''
      });
    }
  }

  writeValue(value: any) {
    if (value) {
      this.yesNoForm.setValue(value);
    }
  }

  registerOnChange(fn: any) {
    this.yesNoForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any) {
    this.yesNoForm.valueChanges.subscribe(fn);
  }
}
