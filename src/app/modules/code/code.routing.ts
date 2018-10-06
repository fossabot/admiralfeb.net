import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './_main/main.component';
import { CodeComponent } from './code.component';

const coderoutes: Routes = [
  {
    path: '_', component: CodeComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'dining_selector', loadChildren: './modules/dining-selector/dining-selector.module#DiningSelectorModule' },
      { path: '', redirectTo: 'main', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '_', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(coderoutes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
