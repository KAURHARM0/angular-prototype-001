import { Component, OnInit, Input } from '@angular/core';
import { EventEmitterService } from '../../providers/event-emitter.service';  

@Component({selector: 'cart-value-card', 
templateUrl: './cartValueCondition.component.html', 
styleUrls: ['./cartValueCondition.component.css']})

export class CartValueComponent implements OnInit  {
  @Input() data: any;

  constructor(    
    private eventEmitterService: EventEmitterService    
  ) { }

  ngOnInit(){}
  onAddButtonClick(data){
    console.log(data);
    this.eventEmitterService.onCardAddButtonClick(data);
  }
}