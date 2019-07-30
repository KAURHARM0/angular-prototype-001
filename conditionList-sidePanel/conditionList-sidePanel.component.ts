import { Component, OnInit } from '@angular/core';

import { EventEmitterService } from '../providers/event-emitter.service';  
import sampleData from '../assets/json/data.json'; 
// import { NgbdCarouselBasicModule } from '../app/carousel-basic.module';

@Component({selector: 'condition-list', 
templateUrl: './conditionList-sidePanel.component.html', 
styleUrls: ['./conditionList-sidePanel.component.css']})

export class ConditionListComponent implements OnInit  {
  conditions: any = sampleData.conditionDetailsBasic

  constructor(    
    private eventEmitterService: EventEmitterService    
  ) { }

  ngOnInit() {
  }
  
  handleClick(condition){
    // debugger;
    this.eventEmitterService.onConditionListButtonClick(condition);
  }
}