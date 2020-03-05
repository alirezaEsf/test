import { Injectable } from '@angular/core';
import { EmploymentTypeEntityService } from '../services/employment-type-entity.service';
import { UnitInfo } from '../domains/unit-info';
import { UnitInfoEntityService } from '../services/unit-info-entity.service';

@Injectable({
  providedIn: 'root'
})
export class FetchUnitInfoFacade {
  constructor(private dtes: UnitInfoEntityService) {
  }

  unitsInfo$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }
  getWithKey(unitInfo: string) {
  this.dtes.getWithQuery({unitInfo});
  }

  add(item: UnitInfo) {
    this.dtes.add(item);
  }

  remove(item: number) {
    this.dtes.delete(item);
  }

  update(item: UnitInfo) {
    this.dtes.update(item);
  }
}
