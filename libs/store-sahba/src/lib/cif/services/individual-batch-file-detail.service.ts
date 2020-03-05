import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { IndividualBatchFileDetail } from '../domains/individual-batch-file-detail';

@Injectable({
  providedIn: 'root'
})
export class IndividualBatchFileDetailService extends EntityCollectionServiceBase<IndividualBatchFileDetail> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('IndividualBatchFileDetail', serviceElementsFactory);
  }

}
