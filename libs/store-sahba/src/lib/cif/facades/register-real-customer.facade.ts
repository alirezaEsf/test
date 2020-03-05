import { Injectable } from '@angular/core';
import { DisabilityType } from '../domains';
import { EmploymentTypeEntityService } from '../services/employment-type-entity.service';
import { RegisterRealCustomer } from '../domains/register-real-customer';
import { RegisterRealCustomerEntityService } from '../services/register-real-customer-entity.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterRealCustomerFacade {
  constructor(private dtes: RegisterRealCustomerEntityService) {
  }

  registerResult$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  add(item: RegisterRealCustomer) {
    this.dtes.add(item);
  }

  remove(item: number) {
    this.dtes.delete(item);
  }

  update(item: RegisterRealCustomer) {
    this.dtes.update(item);
  }
}
