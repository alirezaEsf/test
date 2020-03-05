import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { AVAT_CONFIG } from './services/config.service';

@NgModule()
export class AvatModule
{
  constructor(@Optional() @SkipSelf() parentModule: AvatModule)
  {
    if ( parentModule )
    {
      throw new Error('AvatModule is already loaded. Import it in the AppModule only!');
    }
  }

  static forRoot(config): ModuleWithProviders
  {
    return {
      ngModule : AvatModule,
      providers: [
        {
          provide : AVAT_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
