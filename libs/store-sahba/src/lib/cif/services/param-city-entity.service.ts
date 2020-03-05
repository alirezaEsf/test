import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { CodeParam } from '../domains/code-param';
import { ParamCity } from '../domains/param-city';

@Injectable({
  providedIn: 'root'
})
export class ParamCityEntityService extends EntityCollectionServiceBase<ParamCity> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('ParamCities', serviceElementsFactory);
  }

}
