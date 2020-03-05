import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { RelationShipDetail } from '../domains/relation-ship-detail';
import { RelationshipsRules } from '../domains/relationships-rules';

@Injectable({
  providedIn: 'root'
})
export class RelationshipsRulesEntityService extends EntityCollectionServiceBase<RelationshipsRules> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('RelationshipsRules', serviceElementsFactory);
  }

}
