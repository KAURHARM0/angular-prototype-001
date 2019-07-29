import {ViewChild, TemplateRef, ElementRef, AfterViewInit, OnInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Component  } from '@angular/core';

import { EventEmitterService } from '../providers/event-emitter.service';
import { CartValueComponent } from '../templates/cartValueCondition/cartValueCondition.component';
import { CardComponent } from '../CardComponent';
import sampleData from '../assets/json/data.json';

@Component({selector: 'scroll-carousel', 
templateUrl: './scroll-carousel.component.html', 
styleUrls: ['./scroll-carousel.component.css']})

export class ScrollCarouselComponent implements OnInit  {
  instances: any = sampleData.instances;
  
  @ViewChild('inner', {read: ViewContainerRef, static: false}) inner;
  
  constructor(    
      private eventEmitterService: EventEmitterService, private resolver: ComponentFactoryResolver
  ) { } 

  ngOnInit(){
    if (this.eventEmitterService.subsVar1 == undefined) {    
      this.eventEmitterService.subsVar1 = this.eventEmitterService.    
      invokeScrollComponentFunction.subscribe((object:any) => {    
        this.addNewCard(object);    
      });    
    }
  }

  addNewCard(object){
    // debugger;
    var componentRef, data = {name: "", code: "", instance: 1};
    // const factory;
    switch(object.name) {
      case "Cart Value Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.inner.createComponent(factory); 
        break;
      }
      case "Qualifying Product Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.inner.createComponent(factory);
        break;
      } 
      case "Individual Product Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.inner.createComponent(factory);
        break;
      }
      case "Total Cart Quantity Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.inner.createComponent(factory);
        break;
      }
      case "Individual Product Quantity Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.inner.createComponent(factory);
        break;
      }
      case "Account Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.inner.createComponent(factory);
        break;
      }
      default:
        // code block
    }

    data.name = object.name;
    data.code = this.instances[object.name][0];
    data.instance = this.instances[object.name][1]++;
    (<CardComponent>componentRef.instance).data = data;
  }
}