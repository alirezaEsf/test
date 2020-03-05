import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { ReligionDetailTypeEntityService } from '../services/religion-detail-type-entity.service';
import { ReligionTypeDetail } from '../domains';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReligionDetailTypesFacade {
  constructor(private dtes: ReligionDetailTypeEntityService) {
  }

  religionTypeDetail$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: ReligionTypeDetail) {
    this.dtes.add(item);
  }

  remove(item: ReligionTypeDetail){
    this.dtes.delete(item);
  }

  update(item: ReligionTypeDetail) {
    this.dtes.update(item);
  }
}
