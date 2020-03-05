import { Injectable } from '@angular/core';
import { WorkPlaceTypesEntityService } from '../services/work-place-types-entity.service';
import { WorkPlaceTypes } from '../domains';

@Injectable({
  providedIn: 'root'
})
export class WorkPlaceTypesFacade {
  constructor(private dtes: WorkPlaceTypesEntityService) {
  }

  workPlaceTypes$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: WorkPlaceTypes) {
    this.dtes.add(item);
  }

  remove(item: WorkPlaceTypes){
    this.dtes.delete(item);
  }

  update(item: WorkPlaceTypes) {
    this.dtes.update(item);
  }
}
