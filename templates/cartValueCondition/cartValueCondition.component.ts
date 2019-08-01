import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EventEmitterService } from '../../providers/event-emitter.service'; 

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms'; 

import { ScalesDialog } from '../../dialogBoxes/scales/scales-dialog';
import { DialogData } from '../../dialogBoxes/scales/scales-dialog';

@Component({selector: 'cart-value-card', 
templateUrl: './cartValueCondition.component.html', 
styleUrls: ['./cartValueCondition.component.css']})

export class CartValueComponent implements OnInit  {
  @Input() data: any;
  @ViewChild('deleteBtn', {static: true}) DelBtn: ElementRef;
  hasScales: boolean = false;
  scalesSaved: boolean = false;
  chooseFilterValue = 0;
  

  cartValueForm = this.fb.group({
    productFilter: ['', Validators.required],
    productFilterValue: ['', Validators.required],
    occurence: ['', Validators.required],
    operator: ['', Validators.required],
    currency: ['', Validators.required],
    valueType: ['',Validators.required],
    scales: [[]]
  });

  constructor(    
    private eventEmitterService: EventEmitterService, private fb: FormBuilder, public dialog: MatDialog    
  ) { }

  ngOnInit(){}
  onAddButtonClick(data){
    this.eventEmitterService.onCardAddButtonClick(data);
    console.log(this.DelBtn.nativeElement);
    // debugger; 
    // this.DelBtn.nativeElement.disabled = true;

  }

  onDeleteButtonClick(data, instance){
    this.eventEmitterService.onCardDeleteButtonClick(data.index);
  }

  scalesFlagChanged(event){
    this.hasScales = !this.hasScales;
  }

  productFilterChange(value){
    if(value){
      this.chooseFilterValue = 1;
    }
  }

  onSubmit(){console.log("In onSubmit");}

  onMaintainScalesClick(){
    let savedScales = "";
    if(this.cartValueForm.value.scales.length) {
      savedScales = this.cartValueForm.value.scales;
    }
    const dialogRef = this.dialog.open(ScalesDialog, {
      width: '50%',
      height: '50%',
      data: {scalesArray: savedScales}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        this.handleScalesSave(result.scalesArray);
      }
      // this.animal = result;
    });
  }

  handleScalesSave(result){
    debugger;
    this.scalesSaved = true;
    this.cartValueForm.value.scales = [];
    result.forEach(scale => this.cartValueForm.value.scales.push(scale));
        // console.log((<FormArray>this.cartValueForm.get('scales')));
        // debugger;
  }
}
