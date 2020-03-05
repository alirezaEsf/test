import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { DisabilityTypeEntityService } from '../services/disability-type-entity.service';
import { DisabilityType } from '../domains';
import { EmploymentTypeEntityService } from '../services/employment-type-entity.service';

@Injectable({
  providedIn: 'root'
})
export class EmploymentTypesFacade {
  constructor(private dtes: EmploymentTypeEntityService) {
  }

  employmentTypes$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  add(item: DisabilityType) {
    this.dtes.add(item);
  }

  remove(item: number) {
    this.dtes.delete(item);
  }

  update(item: DisabilityType) {
    this.dtes.update(item);
  }
}
