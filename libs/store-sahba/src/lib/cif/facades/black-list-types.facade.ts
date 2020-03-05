import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SahbaState } from '../../sahba.store';
import { BlackListEntityService } from '../services/black-list-entity.service';
import { BlackListType } from '../domains/black-list-type';

@Injectable({
  providedIn: 'root'
})
export class BlackListTypesFacade {
  constructor(private dtes: BlackListEntityService) {
  }

  blackListTypes$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: BlackListType) {
    this.dtes.add(item);
  }

  remove(item: BlackListType){
    this.dtes.delete(item);
  }

  update(item: BlackListType) {
    this.dtes.update(item);
  }
}
