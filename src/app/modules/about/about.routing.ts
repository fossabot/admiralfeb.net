import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { ProfileComponent } from './profile/profile.component';

const aboutRoutes: Routes = [
    {
        path: '_', component: AboutComponent, children: [
            { path: 'main', component: ProfileComponent },
            { path: '', redirectTo: 'main', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '_', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(aboutRoutes)],
    exports: [RouterModule]
})
export class AboutRoutingModule { }
