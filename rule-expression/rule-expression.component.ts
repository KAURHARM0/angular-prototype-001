import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../providers/event-emitter.service';

import {ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({selector: 'rule-expression', 
templateUrl: './rule-expression.component.html', 
styleUrls: ['./rule-expression.component.css']})

export class RuleExpressionComponent implements OnInit  {
  @ViewChild('ruleDefinition', {static: false}) ruleDefinition: ElementRef;
  constructor(    
    private eventEmitterService: EventEmitterService
  ) { } 

  btns = ["(",")","AND","OR"];

  ngOnInit() {
    if (this.eventEmitterService.subsVar2 == undefined) {    
      this.eventEmitterService.subsVar2 = this.eventEmitterService.    
      invokeExpressionComponentFunction.subscribe((object:any) => {    
        this.addToExpression(object);    
      });    
    }
  }

  addToExpression(data){
    this.ruleDefinition.nativeElement.innerHTML = this.ruleDefinition.nativeElement.innerHTML + " " + data.code + data.instance;
    console.log(data);
    console.log(this.ruleDefinition.nativeElement.innerHTML);
  }

  onRuleButtonsClick(data){
    this.ruleDefinition.nativeElement.innerHTML = this.ruleDefinition.nativeElement.innerHTML + " " + data;
    console.log(data);
    console.log(this.ruleDefinition.nativeElement.innerHTML);
  }

  onExpCheckButtonClick(){
    console.log("Check the expression");
  }

  onExpResetButtonClick(){
    this.ruleDefinition.nativeElement.innerHTML = "";
  }
}