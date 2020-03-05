import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { WorkPlaceTypes } from '../domains/work-place-types';

@Injectable({
  providedIn: 'root'
})
export class WorkPlaceTypesEntityService extends EntityCollectionServiceBase<WorkPlaceTypes> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('WorkPlaceTypes', serviceElementsFactory);
  }

}
