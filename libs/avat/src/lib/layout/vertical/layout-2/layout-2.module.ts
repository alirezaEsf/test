import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvatSidebarModule } from '@avat/components';
import { AvatSharedModule } from '@avat/shared.module';

import { ContentModule } from './../../components/content/content.module';
import { FooterModule } from './../../components/footer/footer.module';
import { NavbarModule } from './../../components/navbar/navbar.module';
import { QuickPanelModule } from './../../components/quick-panel/quick-panel.module';
import { ToolbarModule } from './../../components/toolbar/toolbar.module';

import { VerticalLayout2Component } from './layout-2.component';

@NgModule({
    declarations: [
        VerticalLayout2Component
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
        VerticalLayout2Component
    ]
})
export class VerticalLayout2Module
{
}
