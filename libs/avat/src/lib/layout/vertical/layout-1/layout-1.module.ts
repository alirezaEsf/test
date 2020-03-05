import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvatSidebarModule } from '@avat/components';
import { AvatSharedModule } from '@avat/shared.module';

import { ContentModule } from './../../components/content/content.module';
import { FooterModule } from './../../components/footer/footer.module';
import { NavbarModule } from './../../components/navbar/navbar.module';
import { QuickPanelModule } from './../../components/quick-panel/quick-panel.module';
import { ToolbarModule } from './../../components/toolbar/toolbar.module';

import { VerticalLayout1Component } from './../../vertical/layout-1/layout-1.component';

@NgModule({
    declarations: [
        VerticalLayout1Component
    ],
    imports     : [
        RouterModule,

        AvatSharedModule,
        AvatSidebarModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        VerticalLayout1Component
    ]
})
export class VerticalLayout1Module
{
}
