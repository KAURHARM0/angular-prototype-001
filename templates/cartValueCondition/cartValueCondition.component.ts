import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { EventEmitterService } from '../../providers/event-emitter.service'; 

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms'; 

@Component({selector: 'cart-value-card', 
templateUrl: './cartValueCondition.component.html', 
styleUrls: ['./cartValueCondition.component.css']})

export class CartValueComponent implements OnInit  {
  @Input() data: any;
  @ViewChild('deleteBtn', {static: true}) DelBtn: ElementRef;
  hasScales: boolean = false;

  cartValueForm = this.fb.group({
    productFilter: ['', Validators.required],
    productFilterValue: ['', Validators.required],
    occurence: ['', Validators.required],
    operator: ['', Validators.required],
    currency: ['', Validators.required],
    valueType: ['',Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(    
    private eventEmitterService: EventEmitterService, private fb: FormBuilder    
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
    debugger;
  }
}