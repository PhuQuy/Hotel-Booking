import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';


const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        loadChildren: () => import('@routers/home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'report',
        component: MainLayoutComponent,
        loadChildren: () => import('@routers/report/report.module').then(mod => mod.ReportModule)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
