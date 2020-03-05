import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AvatDirectivesModule } from '@avat/directives/directives';
import { AvatPipesModule } from '@avat/pipes/pipes.module';
import { AvatPageHeaderModule } from '@avat/components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,

    AvatDirectivesModule,
    AvatPipesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,

    AvatDirectivesModule,
    AvatPipesModule
  ]
})
export class AvatSharedModule {
}
