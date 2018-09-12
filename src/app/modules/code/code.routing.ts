import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CodeComponent } from './code.component';

const coderoutes: Routes = [
  {
    path: '.', component: CodeComponent,
    children: [
      { path: 'main', component: MainComponent},
      { path: '', redirectTo: 'main', pathMatch: 'full'}
    ]
  },
  { path: '', redirectTo: '.', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(coderoutes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
