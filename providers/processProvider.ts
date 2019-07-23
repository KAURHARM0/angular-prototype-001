// import { ProcessItem } from '../templates/processItem';
import { Injectable } from '@angular/core';
import { CartValueComponent } from '../templates/cartValueCondition/cartValueCondition.component';
// import { StepTwoComponent } from '../../components/step-two/step-two';
// import { StepThreeComponent } from '../../components/step-three/step-three';
 
@Injectable()
export class ProcessProvider {
 
  private dummyJsonResponse = {
    items: [
      {
        step: 1,
        desc: 'Mighty first step'
      },
      {
        step: 2,
        desc: 'Always first looser'
      },
      {
        step: 3,
        items: [
          {
            step: 3,
            desc: 'I am the best step'
          },
          {
            step: 1,
            desc: 'Mighty first step'
          }
        ]
      },
      {
        step: 2,
        desc: 'Always first looser'
      }
    ]
  }
  
  constructor() { }
 
  getProcessSteps() : ProcessItem[] {
    return this.getPageOrder(this.dummyJsonResponse.items);
  }
 
  private getPageOrder(steps) : ProcessItem[] {
    let result : ProcessItem[] = [];
 
    for (let item of steps) {
      if (item.items) {
        result = result.concat(this.getPageOrder(item.items));
      } else {
        let comp = this.resolveComponentsName(item.step);
        let newItem = new ProcessItem(comp, item.desc);
        result.push(newItem);
      }
    }
 
    return result;
  }
 
  private resolveComponentsName(step) {
    if (step === 1) {
      return StepOneComponent;
    } else if (step === 2) {
      return StepTwoComponent;
    } else if (step === 3) {
      return StepThreeComponent;
    }
  }
 
}