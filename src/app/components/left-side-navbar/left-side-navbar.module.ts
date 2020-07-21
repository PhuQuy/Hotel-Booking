import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideNavbarComponent } from './left-side-navbar.component';

@NgModule({
    declarations: [LeftSideNavbarComponent],
    imports: [
        CommonModule
    ],
    exports: [LeftSideNavbarComponent]
})
export class LeftSideNavbarModule { }
