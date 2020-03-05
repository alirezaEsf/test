import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvatSharedModule } from '@avat/shared.module';

import { ContentComponent } from './content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        AvatSharedModule
    ],
    exports     : [
        ContentComponent
    ]
})
export class ContentModule
{
}
