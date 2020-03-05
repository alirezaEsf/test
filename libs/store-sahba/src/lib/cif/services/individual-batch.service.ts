import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { IndividualBatch } from '../domains/individual-batch';

@Injectable({
  providedIn: 'root'
})
export class IndividualBatchService extends EntityCollectionServiceBase<IndividualBatch> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('IndividualBatch', serviceElementsFactory);
  }

}
