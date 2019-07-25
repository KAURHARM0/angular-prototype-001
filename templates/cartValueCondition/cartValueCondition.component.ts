import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { EventEmitterService } from '../../providers/event-emitter.service';  

@Component({selector: 'cart-value-card', 
templateUrl: './cartValueCondition.component.html', 
styleUrls: ['./cartValueCondition.component.css']})

export class CartValueComponent implements OnInit  {
  @Input() data: any;
  @ViewChild('deleteBtn', {static: true}) DelBtn: ElementRef;
  constructor(    
    private eventEmitterService: EventEmitterService    
  ) { }

  ngOnInit(){}
  onAddButtonClick(data){
    debugger;
    this.eventEmitterService.onCardAddButtonClick(data);
    console.log(this.DelBtn.nativeElement);
    // this.DelBtn.nativeElement.disabled = true;

  }
}