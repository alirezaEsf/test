import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../../../../apps/sahba/src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig } from '@osveh/data-kit';
import { HttpClientModule } from '@angular/common/http';
import { SahbaDataServiceFactory } from './common/entity-data-service';
import { SahbaHttpUrlGenerator } from './common/url-generator';
import { sahbaDataServiceConfig } from './common/data-service-config';
import { EntityDataModule } from '@osveh/data-kit';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot([], {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),

    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),
  ],
  providers: [
    SahbaDataServiceFactory,
    SahbaHttpUrlGenerator,
    { provide: DefaultDataServiceConfig, useValue: sahbaDataServiceConfig },
  ],
  exports: [
    StoreModule
  ]
})
export class SahbaStoreModule {
}
