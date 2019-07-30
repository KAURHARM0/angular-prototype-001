import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeScrollComponentAddFunction = new EventEmitter();
  invokeScrollComponentDeleteFunction = new EventEmitter(); 
  invokeExpressionComponentFunction = new EventEmitter(); 
  invokeDrawerToggleFunction = new EventEmitter();   
  subsVar1: Subscription;  
  subsVar2: Subscription; 
  subsVar3: Subscription;   
  subsVar4: Subscription;    
    
  constructor() { }    
    
  onConditionListButtonClick(object:any) {    
    this.invokeScrollComponentAddFunction.emit(object);    
  }    

  onCardAddButtonClick(object:any) {
    this.invokeExpressionComponentFunction.emit(object); 
  } 

  onCardDeleteButtonClick(object:any){
    this.invokeScrollComponentDeleteFunction.emit(object);
  }  

  onDrawerToggleClick(){
    this.invokeDrawerToggleFunction.emit();
  }

} 