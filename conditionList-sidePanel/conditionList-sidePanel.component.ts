import { Component, OnInit } from '@angular/core';

import { EventEmitterService } from '../providers/event-emitter.service';   
// import { NgbdCarouselBasicModule } from '../app/carousel-basic.module';

@Component({selector: 'condition-list', 
templateUrl: './conditionList-sidePanel.component.html', 
styleUrls: ['./conditionList-sidePanel.component.css']})

export class ConditionListComponent implements OnInit  {

  messages=[
    {name:"Cart Value Condition", subject:"detail", content:"detail", color:"blue"},
    {name:"Qualifying Product Condition", subject:"detail", content:"detail", color:"red"},
    {name:"Individual Product Condition", subject:"detail", content:"detail", color:"green"},
    {name:"Individual Product Quantity Condition", subject:"detail", content:"detail", color:"yellow"},
    {name:"Total Cart Quantity Condition", subject:"detail", content:"detail", color:"pink"},
    {name:"Account Condition", subject:"detail", content:"detail", color:"purple"}
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