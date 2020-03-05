import { Injectable } from '@angular/core';
import { ParamContryEntityService } from '../services/param-contry-entity.service';
import { ParamCountry } from '../domains/param-country';

@Injectable({
  providedIn: 'root'
})
export class ParamCountryFacade {
  constructor(private dtes: ParamContryEntityService) {
  }

  paramContries$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  add(item: ParamCountry) {
    this.dtes.add(item);
  }

  remove(item: number) {
    this.dtes.delete(item);
  }

  update(item: ParamCountry) {
    this.dtes.update(item);
  }
}
