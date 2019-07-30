import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'scales-dialog',
  templateUrl: 'scales-dialog.html',
})
export class ScalesDialog {

  constructor(
    public dialogRef: MatDialogRef<ScalesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

}