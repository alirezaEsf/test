import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { systemBasicDataReducer } from './store/system-basic-data.reducer';
import { EntityDataModule, EntityDataService, EntityDefinitionService } from '@osveh/data-kit';
import { entityMetadata } from './store/system-basic-data.entitymap';
// import { OccupationDepartmansFacade } from './facades';
import { SahbaDataServiceFactory } from '../common/entity-data-service';
import {CountryType} from "./domains/country-type";

// export * from './domains';
// export * from './facades';

@NgModule({
  declarations: [],
  providers: [

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('systemBasicData', systemBasicDataReducer),
    EffectsModule.forFeature([])
  ]
})
export class SystemBasicDataStoreModule
{
  constructor(private entityDefinitionService: EntityDefinitionService,
              private entityDataService: EntityDataService,
              private serviceFactory: SahbaDataServiceFactory
  ) {
    entityDefinitionService.registerMetadataMap(entityMetadata);
    entityDataService.registerService<CountryType>('CountryType', serviceFactory.create<CountryType>('CountryType'));


  }
}





