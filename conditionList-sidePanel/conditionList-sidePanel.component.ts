import { Component, OnInit } from '@angular/core';

import { EventEmitterService } from '../providers/event-emitter.service';   
// import { NgbdCarouselBasicModule } from '../app/carousel-basic.module';

@Component({selector: 'condition-list', 
templateUrl: './conditionList-sidePanel.component.html', 
styleUrls: ['./conditionList-sidePanel.component.css']})

export class ConditionListComponent implements OnInit  {

  messages=[
    {name:"Cart Value Condition", subject:"detail", content:"detail"},
    {name:"Qualifying Product Condition", subject:"detail", content:"detail"},
    {name:"Individual Product Condition", subject:"detail", content:"detail"},
    {name:"Individual Product Quantity Condition", subject:"detail", content:"detail"},
    {name:"Total Cart Quantity Condition", subject:"detail", content:"detail"},
    {name:"Account Condition", subject:"detail", content:"detail"}
  ];

   constructor(    
    private eventEmitterService: EventEmitterService    
  ) { }
  ngOnInit() {}

  
  handleClick(message){
    debugger;
    this.eventEmitterService.onScrollComponentButtonClick(message);
    // NgbdCarouselBasic.addNewCard(message);
  }
}