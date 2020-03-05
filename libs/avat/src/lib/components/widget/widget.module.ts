import { NgModule } from '@angular/core';

import { AvatWidgetComponent } from './widget.component';
import { AvatWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        AvatWidgetComponent,
        AvatWidgetToggleDirective
    ],
    exports     : [
        AvatWidgetComponent,
        AvatWidgetToggleDirective
    ],
})
export class AvatWidgetModule
{
}
