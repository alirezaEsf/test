import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { EducationDegreesEntityService } from '../services/education-degrees-entity.service';
import { EducationDegrees } from '../domains';

@Injectable({
  providedIn: 'root'
})
export class EducationDegreesFacade {
  constructor(private dtes: EducationDegreesEntityService) {
  }

  educationDegrees$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: EducationDegrees) {
    this.dtes.add(item);
  }

  remove(item: EducationDegrees){
    this.dtes.delete(item);
  }

  update(item: EducationDegrees) {
    this.dtes.update(item);
  }
}
