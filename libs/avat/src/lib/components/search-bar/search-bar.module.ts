import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AvatSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        AvatSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        AvatSearchBarComponent
    ]
})
export class AvatSearchBarModule
{
}
