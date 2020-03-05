import { Injectable } from '@angular/core';
import { IndividualCustomer } from '../domains';
import {IndividualCustomerEntityService} from "../services/individual-customer-entity.service";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerFacade {
  constructor(private dtes: IndividualCustomerEntityService) {
  }

  individualCustomer$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }
  getByQuerySimple(object) {
    this.dtes.getWithQuery({ fetchType: object.fetchType, Value: object.Value });
    return of({
      'responseCode': 0,
      'responseMessage': 'عملیات با موفقیت انجام شد',
      'result': {
        'customerId': '46429216',
        'customerType': null,
        'customerCode': '2464292168',
        'firstName': 'سعيده السادات',
        'lastName': 'حسيني',
        'birthDate': null,
        'nationalCode': 77523849,
        'citizenshipType': 1,
        'fatherName': 'سيدجعفر',
        'registrationCityId': null,
        'registrationNumber': null,
        'gender': null,
        'isAlive': 0,
        'status': 2,
        'customerState': 2,
        'formerNationalCode': null,
        'currentNationalCode': null,
        'createChannelId': 0,
        'createUnitId': 0,
        'createUserId': 0,
        'createDate': 0,
        'shahabCode': 0
      }
    });
  }
  add(item: IndividualCustomer) {
    this.dtes.add(item);
  }

  remove(item: IndividualCustomer){
    this.dtes.delete(item);
  }

  update(item: IndividualCustomer) {
    this.dtes.update(item);
  }
}
