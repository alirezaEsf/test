import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { AvatNavigationComponent } from './navigation.component';
import { AvatNavVerticalItemComponent } from './vertical/item/item.component';
import { AvatNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { AvatNavVerticalGroupComponent } from './vertical/group/group.component';
import { AvatNavHorizontalItemComponent } from './horizontal/item/item.component';
import { AvatNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,
    ],
    exports     : [
        AvatNavigationComponent
    ],
    declarations: [
        AvatNavigationComponent,
        AvatNavVerticalGroupComponent,
        AvatNavVerticalItemComponent,
        AvatNavVerticalCollapsableComponent,
        AvatNavHorizontalItemComponent,
        AvatNavHorizontalCollapsableComponent
    ]
})
export class AvatNavigationModule
{
}
