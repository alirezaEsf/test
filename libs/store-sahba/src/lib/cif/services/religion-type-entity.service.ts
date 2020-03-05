import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { ReligionType } from '../domains/religion-type';

@Injectable({
  providedIn: 'root'
})
export class ReligionTypeEntityService extends EntityCollectionServiceBase<ReligionType> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('ReligionType', serviceElementsFactory);
  }

}
