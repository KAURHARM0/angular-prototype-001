import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventEmitterService } from '../providers/event-emitter.service';
import { ControlsMaterialModule } from '../material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CartValueComponent } from '../templates/cartValueCondition/cartValueCondition.component';
import { ScrollCarouselComponent } from '../scroll-carousel/scroll-carousel.component';
// import { ConditionDetailsComponent } from '../condition-details/condition-details.component';
import { ConditionListComponent } from '../conditionList-sidePanel/conditionList-sidePanel.component';
import { RuleDefinitionComponent } from '../rule-definition-content/rule-definition-content.component';
import { RuleExpressionComponent } from '../rule-expression/rule-expression.component';
import { ScalesDialog } from '../dialogBoxes/scales/scales-dialog';
import { CreateNewRuleComponent } from '../newRuleCreation/newRuleCreation.component';
import { PageNotFoundComponent } from './pageNotFound';
import { Basic } from './basic.component';

import { AppRoutingModule }        from './app-routing.module';

import { AppComponent } from './app';

@NgModule({
  imports: [BrowserModule, 
    NgbModule, 
    BrowserAnimationsModule, 
    ControlsMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
    ],
  declarations: [AppComponent, 
    CartValueComponent,
    ScrollCarouselComponent, 
    // ConditionDetailsComponent, 
    ConditionListComponent, 
    ScalesDialog,
    RuleDefinitionComponent, 
    RuleExpressionComponent,
    CreateNewRuleComponent,
    PageNotFoundComponent,
    Basic],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports: [AppComponent, 
    ControlsMaterialModule,
    CreateNewRuleComponent
    ],
  entryComponents: [ CartValueComponent, ScalesDialog ],
  providers: [ EventEmitterService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
