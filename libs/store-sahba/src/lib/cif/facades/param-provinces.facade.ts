import { Injectable } from '@angular/core';
import { ParamProvincesEntityService } from '../services/param-provinces-entity.service';
import { ParamProvinces } from '../domains';

@Injectable({
  providedIn: 'root'
})
export class ParamProvincesFacade {
  constructor(private dtes: ParamProvincesEntityService) {
  }

  paramProvinces$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;
  getAll() {
    this.dtes.getAll();
  }

  add(item: ParamProvinces) {
    this.dtes.add(item);
  }

  remove(item: ParamProvinces){
    this.dtes.delete(item);

  }

  update(item: ParamProvinces) {
    this.dtes.update(item);
  }
}
