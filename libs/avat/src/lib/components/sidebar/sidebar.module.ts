import { NgModule } from '@angular/core';

import { AvatSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        AvatSidebarComponent
    ],
    exports     : [
        AvatSidebarComponent
    ]
})
export class AvatSidebarModule
{
}
