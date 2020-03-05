import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { EducationAcademiesEntityService } from '../services/education-academies-entity.service';
import { EducationAcademies } from '../domains';

@Injectable({
  providedIn: 'root'
})
export class EducationAcademiesFacade {
  constructor(private dtes: EducationAcademiesEntityService) {
  }

  educationAcademies$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: EducationAcademies) {
    this.dtes.add(item);
  }

  remove(item: EducationAcademies){
    this.dtes.delete(item);
  }

  update(item: EducationAcademies) {
    this.dtes.update(item);
  }
}
