import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNewRuleComponent } from '../newRuleCreation/newRuleCreation.component';
import { PageNotFoundComponent } from './pageNotFound';

const appRoutes: Routes = [
  {
    path: 'createRule',
    component: CreateNewRuleComponent
  },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
  //   canLoad: [AuthGuard]
  // },
  // {
  //   path: 'crisis-center',
  //   loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule),
  //   data: { preload: true }
  // },
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        // preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }