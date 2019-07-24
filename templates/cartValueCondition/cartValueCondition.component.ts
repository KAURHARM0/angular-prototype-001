import { Component, OnInit, Input } from '@angular/core';

@Component({selector: 'cart-value-card', 
templateUrl: './cartValueCondition.component.html', 
styleUrls: ['./cartValueCondition.component.css']})

export class CartValueComponent implements OnInit  {
  @Input() data: any;
  ngOnInit(){}
}