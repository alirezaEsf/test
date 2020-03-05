import { Injectable } from '@angular/core';
import { ParamCityEntityService } from '../services/param-city-entity.service';
import { CodeParam } from '../domains/code-param';
import { CodeParamEnittyService } from '../services/code-param-enitty.service';

@Injectable({
  providedIn: 'root'
})
export class CodeParamFacade {
  constructor(private dtes: CodeParamEnittyService) {
  }

  paramCodes$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  add(item: CodeParam) {
    this.dtes.add(item);
  }

  remove(item: number) {
    this.dtes.delete(item);
  }

  update(item: CodeParam) {
    this.dtes.update(item);
  }
}
