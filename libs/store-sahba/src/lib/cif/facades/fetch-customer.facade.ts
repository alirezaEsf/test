import { Injectable } from '@angular/core';
import { FetchCustomer } from '../domains/fetch-customer';
import { FetchCustomerEntityService } from '../services/fetch-customer-entity.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchCustomerFacade {
  constructor(private dtes: FetchCustomerEntityService) {
  }

  customer$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  getByQuery(fetchType: string, value: string, fetchAddressFlag: string, fetchContactFlag: string) {
    this.dtes.getWithQuery(
      { fetchType: fetchType, value: value, fetchAddressFlag: fetchAddressFlag, fetchContactFlag: fetchContactFlag }
    );
    //todo:check with mr jahani for return Value
    return of({
      'responseCode': 0,
      'responseMessage': 'عملیات با موفقیت انجام شد',
      'result': {
        'customerId': 0,
        'customerType': 1,
        'customerCode': 12346,
        'firstName': 'عليرضا',
        'lastName': 'اسفنديار',
        'birthDate': 13730407,
        'nationalCode': '0017153646',
        'citizenshipType': 0,
        'fatherName': 'قربانعلي',
        'registrationCityId': 0,
        'registrationNumber': 0,
        'gender': 1,
        'isAlive': 0,
        'status': 0,
        'customerState': 0,
        'formerNationalCode': 0,
        'currentNationalCode': 0,
        'createChannelId': 0,
        'createUnitId': 0,
        'createUserId': 0,
        'createDate': 0,
        'shahabCode': 1000000017153646
      }

    });

  }

  add(item: FetchCustomer) {
    this.dtes.add(item);
  }

  remove(item: number) {
    this.dtes.delete(item);
  }

  update(item: FetchCustomer) {
    this.dtes.update(item);
  }
}
