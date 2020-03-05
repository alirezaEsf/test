import { Injectable } from '@angular/core';
import { DisabilityType } from '../domains';
import { EmploymentTypeEntityService } from '../services/employment-type-entity.service';
import { RegisterRealCustomer } from '../domains/register-real-customer';
import { RegisterRealCustomerEntityService } from '../services/register-real-customer-entity.service';
import { ApproveRcustomer } from '../domains/approve-rcustomer';
import { ApproveIrcustomerEntityService } from '../services/approve-ircustomer-entity.service';

@Injectable({
  providedIn: 'root'
})
export class ApproveRcustomerFacade {
  constructor(private dtes: ApproveIrcustomerEntityService) {
  }

  approveResult$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  add(item: ApproveRcustomer) {
    this.dtes.add(item);
  }


}
