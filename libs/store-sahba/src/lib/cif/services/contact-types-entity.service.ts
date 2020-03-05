import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { ContactTypes } from '../domains/contact-types';

@Injectable({
  providedIn: 'root'
})
export class ContactTypesEntityService extends EntityCollectionServiceBase<ContactTypes> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('ContactTypes', serviceElementsFactory);
  }

}
