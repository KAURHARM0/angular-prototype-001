import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeScrollComponentFunction = new EventEmitter(); 
  invokeExpressionComponentFunction = new EventEmitter();    
  subsVar1: Subscription;  
  subsVar2: Subscription;    
    
  constructor() { }    
    
  onScrollComponentButtonClick(object:any) {    
    this.invokeScrollComponentFunction.emit(object);    
  }    

  onCardAddButtonClick(object:any) {
  this.invokeExpressionComponentFunction.emit(object); 
  }   
} 