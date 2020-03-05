import { Injectable } from '@angular/core';
import { ParamProvincesEntityService } from '../services/param-provinces-entity.service';
import { ParamProvinces } from '../domains';
import { RelationshipsRules } from '../domains/relationships-rules';
import { RelationshipsRulesEntityService } from '../services/relationships-rules-entity.service';

@Injectable({
  providedIn: 'root'
})
export class RelationshipsRulesFacade {
  constructor(private dtes: RelationshipsRulesEntityService) {
  }

  relationshipsrules$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: RelationshipsRules) {
    this.dtes.add(item);
  }

  remove(item: RelationshipsRules){
    this.dtes.delete(item);

  }

  update(item: RelationshipsRules) {
    this.dtes.update(item);
  }
}
