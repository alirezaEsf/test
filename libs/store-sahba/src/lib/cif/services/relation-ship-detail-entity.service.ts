import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { RelationShipDetail } from '../domains/relation-ship-detail';

@Injectable({
  providedIn: 'root'
})
export class RelationShipDetailEntityService extends EntityCollectionServiceBase<RelationShipDetail> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('RelationShipDetail', serviceElementsFactory);
  }

}
