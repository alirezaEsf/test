import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { BlackListType } from '../domains/black-list-type';

@Injectable({
  providedIn: 'root'
})
export class BlackListEntityService extends EntityCollectionServiceBase<BlackListType> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('BlackListType', serviceElementsFactory);
  }

}
