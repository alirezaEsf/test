import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { ParamJobGroupsEntityService } from '../services/param-job-groups-entity.service';
import { ParamJobGroups } from '../domains/param-job-groups';

@Injectable({
  providedIn: 'root'
})
export class ParamJobGroupsFacade {
  constructor(private dtes: ParamJobGroupsEntityService) {
  }

  paramJobGroups$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: ParamJobGroups) {
    this.dtes.add(item);
  }

  remove(item: ParamJobGroups){
    this.dtes.delete(item);
  }

  update(item: ParamJobGroups) {
    this.dtes.update(item);
  }
}
