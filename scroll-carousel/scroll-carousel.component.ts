import {ViewChild, TemplateRef, ElementRef, AfterViewInit, OnInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Component  } from '@angular/core';

import { EventEmitterService } from '../providers/event-emitter.service';
import { CartValueComponent } from '../templates/cartValueCondition/cartValueCondition.component';

@Component({selector: 'scroll-carousel', 
templateUrl: './scroll-carousel.component.html', 
styleUrls: ['./scroll-carousel.component.css']})

export class ScrollCarouselComponent implements OnInit  {
  
@ViewChild('inner', {read: ViewContainerRef, static: false}) inner;
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
    if (object.from == "Cart Value Condition") {
      const factory = this.resolver.resolveComponentFactory(CartValueComponent);
      let componentRef = this.inner.createComponent(factory);
    }
  }
}