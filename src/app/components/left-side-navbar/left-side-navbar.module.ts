import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideNavbarComponent } from './left-side-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LeftSideNavbarComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [LeftSideNavbarComponent]
})
export class LeftSideNavbarModule { }
