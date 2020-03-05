import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { ParamProvinces } from '../domains/param-provinces';

@Injectable({
  providedIn: 'root'
})
export class ParamProvincesEntityService extends EntityCollectionServiceBase<ParamProvinces> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('ParamProvinces', serviceElementsFactory);
  }

}

