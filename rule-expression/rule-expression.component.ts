import { Component, OnInit } from '@angular/core';

import {ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({selector: 'rule-expression', 
templateUrl: './rule-expression.component.html', 
styleUrls: ['./rule-expression.component.css']})

export class RuleExpressionComponent implements OnInit  {
  @ViewChild('ruleDefinition', {static: false}) ruleDefinition: ElementRef;

  btns = ["(",")","AND","OR"];

  ngOnInit() {}

  onRuleButtonsClick(event){
    this.ruleDefinition.nativeElement.innerHTML = this.ruleDefinition.nativeElement.innerHTML + " " + event;
    console.log(event);
    console.log(this.ruleDefinition.nativeElement.innerHTML);
  }

  onExpCheckButtonClick(){
    console.log("Check the expression");
  }

  onExpResetButtonClick(){
    this.ruleDefinition.nativeElement.innerHTML = "";
  }
}