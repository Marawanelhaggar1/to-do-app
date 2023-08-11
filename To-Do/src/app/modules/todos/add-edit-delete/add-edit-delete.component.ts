import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-delete',
  templateUrl: './add-edit-delete.component.html',
  styleUrls: ['./add-edit-delete.component.scss'],
})
export class AddEditDeleteComponent {
  newTask!: FormGroup;

  constructor(
    private _form: FormBuilder,
    public dialogRef: MatDialogRef<AddEditDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newTask = this._form.group({
      task: ['', Validators.required],
    });
  }

  addTask() {
    console.log(this.newTask);

    if (this.newTask.valid) {
      console.log(this.newTask);
      this.dialogRef.close(this.newTask.value);
      this.newTask.reset();
    }
  }
}
