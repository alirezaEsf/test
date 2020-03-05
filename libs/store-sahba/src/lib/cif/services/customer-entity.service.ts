import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { Customer } from '../domains/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerEntityService extends EntityCollectionServiceBase<Customer> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('Customer', serviceElementsFactory);
  }

}
