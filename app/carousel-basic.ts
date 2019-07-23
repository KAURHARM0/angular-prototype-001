import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ViewChild, TemplateRef, ElementRef, AfterViewInit, OnInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { EventEmitterService } from '../providers/event-emitter.service';
import { CartValueComponent } from '../templates/cartValueCondition/cartValueCondition.component';

@Component({selector: 'ngbd-carousel-basic',
templateUrl: './scratch.html', 
styleUrls: ['./carousel-basic.css']})
export class NgbdCarouselBasic implements OnInit  {
  
  // @ViewChild('acc', {read: ElementRef, static: false}) acoordianRef: ElementRef;
  @ViewChild('ruleDefinition', {static: false}) ruleDefinition: ElementRef;
  @ViewChild('addCard', {static: false}) addCard: TemplateRef<any>;
  @ViewChild('inner', {read: ViewContainerRef, static: false}) inner;

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  
  constructor(    
    private eventEmitterService: EventEmitterService, private resolver: ComponentFactoryResolver
  ) { }  

  ngOnInit(){
    // if (this.eventEmitterService.subsVar == undefined) {    
    //   this.eventEmitterService.subsVar = this.eventEmitterService.    
    //   invokeFirstComponentFunction.subscribe((object:any) => {    
    //     this.addNewCard(object);    
    //   });    
    // }
  }

  ngAfterViewInit() {
   console.log(this.ruleDefinition);
  }

  addNewCard(object: any){
    debugger;
    // if (object.from == "Cart Value Condition") {
    //   const factory = this.resolver.resolveComponentFactory(CartValueComponent);
    //   let componentRef = this.inner.createComponent(factory);
    // }
    // var a = '<div class="col-3"><div class="card active"><div class="card-header" align-items="center"><<h6 class="float-left" vertical-align="baseline"> ' + object.from +'</h6><div class="float-right"><button class="example-icon">Add</button><button class="example-icon">Delete</button></div></div><div class="card-body"><p class="card-text">Some quick example text</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div><ng-content></ng-content>';
    // this.inner.nativeElement.appendChild(a);
  };
  
}
