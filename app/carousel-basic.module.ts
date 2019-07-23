import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EventEmitterService } from '../providers/event-emitter.service';

import { CartValueComponent } from '../templates/cartValueCondition/cartValueCondition.component';
import { ScrollCarouselComponent } from '../scroll-carousel/scroll-carousel.component';
import { ConditionDetailsComponent } from '../condition-details/condition-details.component';
import { ConditionListComponent } from '../conditionList-sidePanel/conditionList-sidePanel.component';
import { RuleDefinitionComponent } from '../rule-definition-content/rule-definition-content.component';
import { RuleExpressionComponent } from '../rule-expression/rule-expression.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { NgbdCarouselBasic } from './carousel-basic';

@NgModule({
  imports: [BrowserModule, 
    NgbModule, 
    BrowserAnimationsModule, 
    MatSidenavModule, 
    MatButtonModule, 
    MatIconModule,
    MatToolbarModule,
    MatListModule, 
    MatInputModule,
    MatGridListModule, 
    MatDividerModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,],
  declarations: [NgbdCarouselBasic, 
    CartValueComponent,
    ScrollCarouselComponent, 
    ConditionDetailsComponent, 
    ConditionListComponent, 
    RuleDefinitionComponent, 
    RuleExpressionComponent,],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports: [NgbdCarouselBasic,
    MatSidenavModule, 
    MatListModule, 
    MatInputModule,
    MatGridListModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatDividerModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,],
  entryComponents: [ CartValueComponent ],
  providers: [ EventEmitterService ],
  bootstrap: [ NgbdCarouselBasic ]
})
export class NgbdCarouselBasicModule {}
