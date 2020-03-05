import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { ReligionTypeDetail } from '../domains/religion-type-detail';

@Injectable({
  providedIn: 'root'
})
export class ReligionDetailTypeEntityService extends EntityCollectionServiceBase<ReligionTypeDetail> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('ReligionTypeDetail', serviceElementsFactory);
  }

}
