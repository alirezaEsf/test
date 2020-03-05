import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AvatConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
    declarations: [
        AvatConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        AvatConfirmDialogComponent
    ],
})
export class AvatConfirmDialogModule
{
}
