import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { ParamCountry } from '../domains/param-country';

@Injectable({
  providedIn: 'root'
})
export class ParamContryEntityService extends EntityCollectionServiceBase<ParamCountry> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('ParamCountry', serviceElementsFactory);
  }

}
