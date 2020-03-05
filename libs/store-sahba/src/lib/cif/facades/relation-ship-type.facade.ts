import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { RelationShipEntityService } from '../services/relation-ship-entity.service';
import { RelationShipDetail } from '../domains/relation-ship-detail';

@Injectable({
  providedIn: 'root'
})
export class RelationShipTypeFacade {
  constructor(private dtes: RelationShipEntityService) {
  }

  relationShipType$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: RelationShipDetail) {
    this.dtes.add(item);
  }

  remove(item: RelationShipDetail){
    this.dtes.delete(item);
  }

  update(item: RelationShipDetail) {
    this.dtes.update(item);
  }
}
