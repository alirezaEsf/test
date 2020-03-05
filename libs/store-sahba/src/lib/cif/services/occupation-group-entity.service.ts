import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { OccupationGroup } from '../domains/occupation-group';

@Injectable({
  providedIn: 'root'
})
export class OccupationGroupEntityService extends EntityCollectionServiceBase<OccupationGroup> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('OccupationGroup', serviceElementsFactory);
  }

}
