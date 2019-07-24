import {ViewChild, TemplateRef, ElementRef, AfterViewInit, OnInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Component  } from '@angular/core';

import { EventEmitterService } from '../providers/event-emitter.service';
import { CartValueComponent } from '../templates/cartValueCondition/cartValueCondition.component';
import { CardComponent } from '../CardComponent';

@Component({selector: 'scroll-carousel', 
templateUrl: './scroll-carousel.component.html', 
styleUrls: ['./scroll-carousel.component.css']})

export class ScrollCarouselComponent implements OnInit  {
  instances = { "Cart Value Condition": ["CV",1] ,
  "Qualifying Product Condition": ["QP",1], 
  "Individual Product Condition": ["IP",1], 
  "Total Cart Quantity Condition": ["TCQ",1], 
  "Individual Product Quantity Condition": ["IPQ",1], 
  "Account Condition": ["AC",1]};
  
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
    var componentRef, data = {name: "", code: "", instance: 1};
    if (object.name == "Cart Value Condition") {
      const factory = this.resolver.resolveComponentFactory(CartValueComponent);
      componentRef = this.inner.createComponent(factory); 
    }

    data.name = object.name;
    data.code = this.instances[object.name][0];
    data.instance = this.instances[object.name][1]++;
    (<CardComponent>componentRef.instance).data = data;
  }
}