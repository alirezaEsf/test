import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { ParamCountry } from '../domains/param-country';
import { RCustomerInquiry } from '../domains/rCustomer-inquiry';

@Injectable({
  providedIn: 'root'
})
export class RCustomerInquiryEntityService extends EntityCollectionServiceBase<RCustomerInquiry> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('RCustomerInquiry', serviceElementsFactory);
  }

}
