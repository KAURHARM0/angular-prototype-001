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
  componentsReferences = [];
  index: number = 1;
  
  @ViewChild('cardContainer', {read: ViewContainerRef, static: false}) cardContainer;
  
  constructor(    
      private eventEmitterService: EventEmitterService, private resolver: ComponentFactoryResolver
  ) { } 

  ngOnInit(){
    if (this.eventEmitterService.subsVar1 == undefined) {    
      this.eventEmitterService.subsVar1 = this.eventEmitterService.    
      invokeScrollComponentAddFunction.subscribe((object:any) => {    
        this.addNewCard(object);    
      });    
    }
    if (this.eventEmitterService.subsVar3 == undefined) {    
      this.eventEmitterService.subsVar3 = this.eventEmitterService.    
      invokeScrollComponentDeleteFunction.subscribe((object:any) => {    
        this.deleteCard(object);    
      });    
    }
  }

  addNewCard(object){
    // debugger;
    var componentRef, data = {name: "", code: "", instance: 1, index: 0, color: ""};
    // const factory;
    switch(object.name) {
      case "Cart Value Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.cardContainer.createComponent(factory); 
        break;
      }
      case "Qualifying Product Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.cardContainer.createComponent(factory);
        break;
      } 
      case "Individual Product Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.cardContainer.createComponent(factory);
        break;
      }
      case "Total Cart Quantity Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.cardContainer.createComponent(factory);
        break;
      }
      case "Individual Product Quantity Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.cardContainer.createComponent(factory);
        break;
      }
      case "Account Condition": {
        const factory = this.resolver.resolveComponentFactory(CartValueComponent);
        componentRef = this.cardContainer.createComponent(factory);
        break;
      }
      default:
        // code block
    }
    this.componentsReferences.push(componentRef);
    data.name = object.name;
    data.code = this.instances[object.name][0];
    data.instance = this.instances[object.name][1]++;
    data.index = this.index++;
    data.color = object.color;
    (<CardComponent>componentRef.instance).data = data;
  }

  deleteCard(index){
    if (this.cardContainer.length < 1)
      return;

    let componentRef = this.componentsReferences.filter(component => component.instance.data.index == index)[0];
    let component: CardComponent = <CardComponent>componentRef.instance;
    let vcrIndex: number = this.cardContainer.indexOf(componentRef)
    // removing component from container
    this.cardContainer.remove(vcrIndex);
    this.componentsReferences = this.componentsReferences.filter(component => component.instance.index !== index);
  }
}