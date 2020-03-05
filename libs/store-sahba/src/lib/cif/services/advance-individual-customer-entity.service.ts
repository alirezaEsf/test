import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { AdvanceIndividualCustomer } from '../domains/advance-individual-customer';

@Injectable({
  providedIn: 'root'
})
export class AdvanceIndividualCustomerEntityService extends EntityCollectionServiceBase<AdvanceIndividualCustomer> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('AdvanceIndividualCustomer', serviceElementsFactory);
  }

}
