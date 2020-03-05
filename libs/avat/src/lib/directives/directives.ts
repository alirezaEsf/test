import { NgModule } from '@angular/core';

import { AvatIfOnDomDirective } from '@avat/directives/avt-if-on-dom.directive';
import { AvatInnerScrollDirective } from '@avat/directives/avt-inner-scroll.directive';
import { AvatMatSidenavHelperDirective, AvatMatSidenavTogglerDirective } from '@avat/directives/avt-mat-sidenav.directive';

@NgModule({
    declarations: [
        AvatIfOnDomDirective,
        AvatInnerScrollDirective,
        AvatMatSidenavHelperDirective,
        AvatMatSidenavTogglerDirective,
    ],
    imports     : [],
    exports     : [
        AvatIfOnDomDirective,
        AvatInnerScrollDirective,
        AvatMatSidenavHelperDirective,
        AvatMatSidenavTogglerDirective,
    ]
})
export class AvatDirectivesModule
{
}
