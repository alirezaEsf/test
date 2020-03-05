import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { DisabilityType } from '../domains/disability-type';

@Injectable({
  providedIn: 'root'
})
export class DisabilityTypeEntityService extends EntityCollectionServiceBase<DisabilityType> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('DisabilityType', serviceElementsFactory);
  }

}
