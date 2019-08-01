import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormArray } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  scalesArray: [];
}

@Component({
  selector: 'scales-dialog',
  templateUrl: './scales-dialog.html',
  styleUrls: ['./scales-dialog.css']
})
export class ScalesDialog implements OnInit {

  scales: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ScalesDialog>, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    debugger;
    this.scales = this.formBuilder.group({
     values: this.formBuilder.array(this.generateArray())
    });
    
    this.scales.get('values').valueChanges.subscribe(
      value => {
        debugger;
        // this.data.scalesArray = value;
        // console.log(value);
      }
    );

    this.scales.valueChanges.subscribe(
      value => {
        debugger;
        // this.data.scalesArray = JSON.stringify(value);
        this.data.scalesArray = value.values;
        // console.log(JSON.stringify(value));
      }
    );
  }

  generateArray(){
    var array = [];
    debugger;
    if(this.data.scalesArray.length){
      this.data.scalesArray.forEach( scale => {
        array.push(this.addNewScaleGroup(scale.from, scale.to));
      });
      
    } else {
      array.push(this.addNewScaleGroup("",""));
    }
    return array;
  }

  addScaleButtonClick(): void {
    (<FormArray>this.scales.get('values')).push(this.addNewScaleGroup("",""));
  }
  
  addNewScaleGroup(val1, val2): FormGroup {
    return this.formBuilder.group({
      from: [val1, [Validators.required, Validators.minLength(1)]],
      to: [val2, [Validators.required, Validators.minLength(1)]]
    });
  }

  onCancelClick(): void {

    this.dialogRef.close();
  }

  onDeleteButtonClick(index){
    (<FormArray>this.scales.get('values')).removeAt(index);
  }

}
