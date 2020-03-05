import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { RegisterRealCustomer } from '../domains/register-real-customer';
import { ApproveRcustomer } from '../domains/approve-rcustomer';

@Injectable({
  providedIn: 'root'
})
export class ApproveIrcustomerEntityService extends EntityCollectionServiceBase<ApproveRcustomer> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('ApproveRcustomer', serviceElementsFactory);
  }

}
