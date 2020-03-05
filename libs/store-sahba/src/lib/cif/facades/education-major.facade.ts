import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { DisabilityTypeEntityService } from '../services/disability-type-entity.service';
import { DisabilityType } from '../domains';
import { EmploymentTypeEntityService } from '../services/employment-type-entity.service';
import { EducationMajor } from '../domains/education-major';
import { EducatiomMajorEntityService } from '../services/educatiom-major-entity.service';

@Injectable({
  providedIn: 'root'
})
export class EducationMajorFacade {
  constructor(private dtes: EducatiomMajorEntityService) {
  }

  educationMajors$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  add(item: EducationMajor) {
    this.dtes.add(item);
  }

  remove(educationMajorID: number) {
    this.dtes.delete(educationMajorID);
  }

  update(item: EducationMajor) {
    this.dtes.update(item);
  }
}
