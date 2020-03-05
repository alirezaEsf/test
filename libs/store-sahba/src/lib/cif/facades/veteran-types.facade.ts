import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { DisabilityTypeEntityService } from '../services/disability-type-entity.service';
import { DisabilityType } from '../domains';
import { VeteranTypeEntityService } from '../services/veteran-type-entity.service';
import { VeteranType } from '../domains/veteran-type';

@Injectable({
  providedIn: 'root'
})
export class VeteranTypesFacade {
  constructor(private dtes: VeteranTypeEntityService) {
  }

  veteranTypes$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  add(item: VeteranType) {
    this.dtes.add(item);
  }

  remove(id: number) {
    this.dtes.delete(id);
  }

  update(item: VeteranType) {
    this.dtes.update(item);
  }
}
