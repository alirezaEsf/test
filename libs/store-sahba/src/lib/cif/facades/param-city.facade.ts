import { Injectable } from '@angular/core';
import { ParamCity } from '../domains/param-city';
import { ParamCityEntityService } from '../services/param-city-entity.service';
import { CodeParamEnittyService } from '../services/code-param-enitty.service';

@Injectable({
  providedIn: 'root'
})
export class ParamCityFacade {
  constructor(private dtes: ParamCityEntityService) {
  }

  paramCities$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  add(item: ParamCity) {
    this.dtes.add(item);
  }

  remove(item: number) {
    this.dtes.delete(item);
  }

  update(item: ParamCity) {
    this.dtes.update(item);
  }
}
