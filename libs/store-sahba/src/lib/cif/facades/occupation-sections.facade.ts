import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { OccupationSectionsEntityService } from '../services/occupation-sections-entity.service';
import { OccupationSections } from '../domains/occupation-sections';

@Injectable({
  providedIn: 'root'
})
export class OccupationSectionsFacade {
  constructor(private dtes: OccupationSectionsEntityService) {
  }

  occupationSections$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: OccupationSections) {
    this.dtes.add(item);
  }

  remove(item: OccupationSections){
    this.dtes.delete(item);
  }

  update(item: OccupationSections) {
    this.dtes.update(item);
  }
}
