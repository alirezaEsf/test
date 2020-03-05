import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { OccupationDepartmansEntityService } from '../services/occupation-departmans-entity.service';
import { OccupationDepartmans } from '../domains/occupation-departmans';

@Injectable({
  providedIn: 'root'
})
export class OccupationDepartmansFacade {
  constructor(private dtes: OccupationDepartmansEntityService) {
  }

  occupationDepartmans$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: OccupationDepartmans) {
    this.dtes.add(item);
  }

  remove(item: OccupationDepartmans){
    this.dtes.delete(item);
  }

  update(item: OccupationDepartmans) {
    this.dtes.update(item);
  }
}
