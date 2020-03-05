import { Injectable } from '@angular/core';
import { AdvanceIndividualCustomer } from '../domains';
import {AdvanceIndividualCustomerEntityService} from "../services/advance-individual-customer-entity.service";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdvanceIndividualCustomerFacade {
  constructor(private dtes: AdvanceIndividualCustomerEntityService) {
  }

  advanceIndividualCustomer$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }
  getByQueryAdvanced(object) {
//    this.dtes.getWithQuery({ firstName: object.firstName, lastName: object.lastName, citizenshipType: object.citizenshipType, registrationNumber: object.registrationNumber, immigrationNumber: object.immigrationNumber });
    this.dtes.getWithQuery(object);
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
  add(item: AdvanceIndividualCustomer) {
    this.dtes.add(item);
  }

  remove(item: AdvanceIndividualCustomer){
    this.dtes.delete(item);
  }

  update(item: AdvanceIndividualCustomer) {
    this.dtes.update(item);
  }
}
