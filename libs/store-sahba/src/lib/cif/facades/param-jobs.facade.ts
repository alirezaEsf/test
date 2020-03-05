import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { ParamJobsEntityService } from '../services/param-jobs-entity.service';
import { ParamJobs } from '../domains/param-jobs';

@Injectable({
  providedIn: 'root'
})
export class ParamJobsFacade {
  constructor(private dtes: ParamJobsEntityService) {
  }

  paramJobs$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: ParamJobs) {
    this.dtes.add(item);
  }

  remove(item: ParamJobs){
    this.dtes.delete(item);
  }

  update(item: ParamJobs) {
    this.dtes.update(item);
  }
}
