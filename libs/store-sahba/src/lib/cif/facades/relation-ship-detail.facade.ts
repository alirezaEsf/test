import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { RelationShipDetailEntityService } from '../services/relation-ship-detail-entity.service';
import { RelationShipType } from '../domains/relation-ship-type';

@Injectable({
  providedIn: 'root'
})
export class RelationShipDetailFacade {
  constructor(private dtes: RelationShipDetailEntityService) {
  }

  relationShipDetail$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: RelationShipType) {
    this.dtes.add(item);
  }

  remove(item: RelationShipType){
    this.dtes.delete(item);
  }

  update(item: RelationShipType) {
    this.dtes.update(item);
  }
}
