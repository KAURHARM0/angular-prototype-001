import { Component, OnInit } from '@angular/core';

import { EventEmitterService } from '../providers/event-emitter.service';   
// import { NgbdCarouselBasicModule } from '../app/carousel-basic.module';

@Component({selector: 'condition-list', 
templateUrl: './conditionList-sidePanel.component.html', 
styleUrls: ['./conditionList-sidePanel.component.css']})

export class ConditionListComponent implements OnInit  {

  messages=[
    {name:"Cart Value Condition", subject:"def", content:"ghi"},
    {name:"Qualifying Product Condition", subject:"mno", content:"pqr"},
    {name:"Quantity Condition", subject:"vwx", content:"yz"}
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