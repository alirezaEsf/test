import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import {BlackListOwner} from '../domains/black-list-owner';


@Injectable({
  providedIn: 'root'
})
export class BlackListOwnerEntityService extends EntityCollectionServiceBase<BlackListOwner> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('BlackListOwner', serviceElementsFactory);
  }

}
