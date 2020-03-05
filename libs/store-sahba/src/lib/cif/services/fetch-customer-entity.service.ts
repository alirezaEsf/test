import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { EmploymentType } from '../domains/employment-type';
import { FetchCustomer } from '../domains/fetch-customer';

@Injectable({
  providedIn: 'root'
})
export class FetchCustomerEntityService extends EntityCollectionServiceBase<FetchCustomer> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('FetchCustomer', serviceElementsFactory);
  }

}
