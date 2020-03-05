import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { IndividualCustomer } from '../domains/individual-customer';

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerEntityService extends EntityCollectionServiceBase<IndividualCustomer> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('IndividualCustomer', serviceElementsFactory);
  }

}
