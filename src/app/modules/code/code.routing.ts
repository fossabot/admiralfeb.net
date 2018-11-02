import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeMainComponent } from './components/_main/main.component';
import { CodeComponent } from './code.component';
import { ErrorNotFoundComponent } from '../shared-module/components/error-not-found/error-not-found.component';

const coderoutes: Routes = [
  {
    path: '_', component: CodeComponent,
    children: [
      { path: 'main', component: CodeMainComponent },
      { path: 'dining_selector', loadChildren: './modules/dining-selector/dining-selector.module#DiningSelectorModule' },
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: '**', component: ErrorNotFoundComponent},
    ]
  },
  { path: '', redirectTo: '_', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(coderoutes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
