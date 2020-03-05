import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { DisabilityTypeEntityService } from '../services/disability-type-entity.service';
  import { DisabilityType } from '../domains';
import { EmploymentTypeEntityService } from '../services/employment-type-entity.service';
import { EducationMajor } from '../domains/education-major';
import { EducatiomMajorEntityService } from '../services/educatiom-major-entity.service';
import { EducationMajorGroup } from '../domains/education-majorGroup';
import { EdcuationMajorGroupEntityService } from '../services/edcuation-majorGroup-entity.service';

@Injectable({
  providedIn: 'root'
})
export class EducationMajorGroupFacade {
  constructor(private dtes: EdcuationMajorGroupEntityService) {
  }

  educationMajorGroup$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  add(item: EducationMajorGroup) {
    this.dtes.add(item);
  }

  remove(item: number) {
    this.dtes.delete(item);
  }

  update(item: EducationMajorGroup) {
    this.dtes.update(item);
  }
}
