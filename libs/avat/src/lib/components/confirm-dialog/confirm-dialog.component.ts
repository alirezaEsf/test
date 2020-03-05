import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector   : 'avt-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class AvatConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<AvatConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<AvatConfirmDialogComponent>
    )
    {
    }

}
