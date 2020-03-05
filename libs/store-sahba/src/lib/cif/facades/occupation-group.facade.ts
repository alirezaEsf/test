import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { OccupationGroupEntityService } from '../services/occupation-group-entity.service';
import { OccupationGroup } from '../domains/occupation-group';

@Injectable({
  providedIn: 'root'
})
export class OccupationGroupFacade {
  constructor(private dtes: OccupationGroupEntityService) {
  }

  occupationGroup$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: OccupationGroup) {
    this.dtes.add(item);
  }

  remove(item: OccupationGroup){
    this.dtes.delete(item);
  }

  update(item: OccupationGroup) {
    this.dtes.update(item);
  }
}
