import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { ReligionTypeEntityService } from '../services/religion-type-entity.service';
import { ReligionType } from '../domains';

@Injectable({
  providedIn: 'root'
})
export class ReligionTypesFacade {
  constructor(private dtes: ReligionTypeEntityService) {
  }

  religionTypes$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: ReligionType) {
    this.dtes.add(item);
  }

  remove(item: ReligionType){
    this.dtes.delete(item);
  }

  update(item: ReligionType) {
    this.dtes.update(item);
  }
}
