import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  form!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.generateForm();
  }

  generateForm() {
    this.form = this._formBuilder.group({
      UserName: ['', [Validators.required]],
      Password: ['', Validators.required],
    });
  }

  onLogin() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
