import { Component, OnInit } from '@angular/core';

import { EventEmitterService } from '../providers/event-emitter.service';   
// import { NgbdCarouselBasicModule } from '../app/carousel-basic.module';

@Component({selector: 'condition-list', 
templateUrl: './conditionList-sidePanel.component.html', 
styleUrls: ['./conditionList-sidePanel.component.css']})

export class ConditionListComponent implements OnInit  {

  messages=[
    {from:"Cart Value Condition", subject:"def", content:"ghi"},
    {from:"Qualifying Product Condition", subject:"mno", content:"pqr"},
    {from:"Quantity Condition", subject:"vwx", content:"yz"}
  ];

   constructor(    
    private eventEmitterService: EventEmitterService    
  ) { }
  ngOnInit() {}

  
  handleClick(message){
    debugger;
    this.eventEmitterService.onFirstComponentButtonClick(message);
    // NgbdCarouselBasic.addNewCard(message);
  }
}