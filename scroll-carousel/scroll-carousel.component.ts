import {ViewChild, TemplateRef, ElementRef, AfterViewInit, OnInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Component  } from '@angular/core';

import { EventEmitterService } from '../providers/event-emitter.service';

@Component({selector: 'scroll-carousel', 
templateUrl: './scroll-carousel.component.html', 
styleUrls: ['./scroll-carousel.component.css']})

export class ScrollCarouselComponent implements OnInit  {
constructor(    
    private eventEmitterService: EventEmitterService, private resolver: ComponentFactoryResolver
  ) { } 

  ngOnInit(){
    if (this.eventEmitterService.subsVar == undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((object:any) => {    
        this.addNewCard(object);    
      });    
    }
  }

  addNewCard(object){
    debugger;
  }
}