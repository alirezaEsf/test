import { NgModule } from '@angular/core';

import { PageHeaderComponent } from '@avat/components/page-header/page-header.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  imports: [
    MatIconModule
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class AvatPageHeaderModule {
}
