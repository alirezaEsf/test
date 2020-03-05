import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { RegisterRealCustomer } from '../domains/register-real-customer';

@Injectable({
  providedIn: 'root'
})
export class RegisterRealCustomerEntityService extends EntityCollectionServiceBase<RegisterRealCustomer> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('RegisterRealCustomer', serviceElementsFactory);
  }

}
