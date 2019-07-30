import { Component } from '@angular/core';
// import {MatSidenavModule} from '@angular/material/sidenav';
import {ViewChild, TemplateRef, ElementRef, AfterViewInit, OnInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
// import { EventEmitterService } from '../providers/event-emitter.service';
// import { CartValueComponent } from '../templates/cartValueCondition/cartValueCondition.component';

import { RouterOutlet } from '@angular/router';

@Component({selector: 'ngbd-carousel-basic',
templateUrl: './app.html', 
styleUrls: ['./carousel-basic.css']})
export class NgbdCarouselBasic implements OnInit  {
  // @ViewChild('ruleDefinition', {static: false}) ruleDefinition: ElementRef;
  // @ViewChild('drawer', {static: false}) drawer: ElementRef;
  // @ViewChild('addCard', {static: false}) addCard: TemplateRef<any>;
  // @ViewChild('inner', {read: ViewContainerRef, static: false}) inner;

  // images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  
  constructor(    
    // private eventEmitterService: EventEmitterService, private resolver: ComponentFactoryResolver
  ) { }  

  ngOnInit(){
    // if (this.eventEmitterService.subsVar4 == undefined) {    
    //   this.eventEmitterService.subsVar4 = this.eventEmitterService.    
    //   invokeDrawerToggleFunction.subscribe((object:any) => {    
    //     this.handleDrawer();    
    //   });    
    // }
  }

  handleDrawer() {
    // this.drawer.toggle();
  }

  ngAfterViewInit() {
  //  console.log(this.ruleDefinition);
  }
  
}
