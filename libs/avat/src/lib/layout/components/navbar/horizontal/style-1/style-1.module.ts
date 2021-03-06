import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AvatNavigationModule } from '@avat/components';
import { AvatSharedModule } from '@avat/shared.module';

import { NavbarHorizontalStyle1Component } from './style-1.component';

@NgModule({
    declarations: [
        NavbarHorizontalStyle1Component
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        AvatSharedModule,
        AvatNavigationModule
    ],
    exports     : [
        NavbarHorizontalStyle1Component
    ]
})
export class NavbarHorizontalStyle1Module
{
}
