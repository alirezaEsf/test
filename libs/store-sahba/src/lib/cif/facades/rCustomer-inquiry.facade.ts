import { Injectable } from '@angular/core';
import { ParamCityEntityService } from '../services/param-city-entity.service';
import { CodeParam } from '../domains/code-param';
import { CodeParamEnittyService } from '../services/code-param-enitty.service';
import { RCustomerInquiry } from '../domains/rCustomer-inquiry';
import { RCustomerInquiryEntityService } from '../services/rCustomer-inquiry-entity.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RCustomerInquiryFacade {
  constructor(private dtes: RCustomerInquiryEntityService) {
  }

  inquiryResult$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  getByQuery(nationalCode: string, birthdate: string) {
   this.dtes.getWithQuery({ nationalCode, birthdate });
   return of({
      responseCode: 0,
      responseMessage: 'عملیات با موفقیت انجام شد',
      result: {
        nationalCode: '0017153646',
        firstName: 'عليرضا',
        lastName: 'اسفنديار',
        fatherName: 'قربانعلي',
        birthDate: 13730407,
        isAlive: 0,
        gender: 1,
        identityNumber: 0,
        identityAlphabeticPart: 'ا',
        identityNumericPart: 80,
        identitySerial: 488988,
        identityIssueCityId: 100,
        birthCityId: 0,
        postalCode: null,
        inquiryId: 2931,
        inquiryDate: 0,
        shahabCode: 1000000017153646
      }
    });
  }

  add(item: RCustomerInquiry) {
    this.dtes.add(item);
  }

  remove(item: number) {
    this.dtes.delete(item);
  }

  update(item: RCustomerInquiry) {
    this.dtes.update(item);
  }
}
