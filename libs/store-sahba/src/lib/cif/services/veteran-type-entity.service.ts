import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { VeteranType } from '../domains/veteran-type';

@Injectable({
  providedIn: 'root'
})
export class VeteranTypeEntityService extends EntityCollectionServiceBase<VeteranType> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('VeteranType', serviceElementsFactory);
  }

}
