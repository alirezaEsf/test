import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AvatPipesModule } from '@avat/pipes/pipes.module';

import { AvatMaterialColorPickerComponent } from './material-color-picker.component';

@NgModule({
    declarations: [
        AvatMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        AvatPipesModule
    ],
    exports: [
        AvatMaterialColorPickerComponent
    ],
})
export class AvatMaterialColorPickerModule
{
}
