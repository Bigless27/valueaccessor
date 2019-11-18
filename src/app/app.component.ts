import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'valueaccessor';
  public mainForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.mainForm = this.fb.group({
      camper: [{ value: false }],
      whatever: [{ value: false, notes: '' }]
    });

    this.mainForm.valueChanges.subscribe((f) => {
      console.log(f);
    });
  }
}
