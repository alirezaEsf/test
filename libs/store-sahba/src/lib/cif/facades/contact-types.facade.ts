import { Injectable } from '@angular/core';
import { ParamCityEntityService } from '../services/param-city-entity.service';
import { CodeParam } from '../domains/code-param';
import { CodeParamEnittyService } from '../services/code-param-enitty.service';
import { ContactTypes } from '../domains/contact-types';
import { ContactTypesEntityService } from '../services/contact-types-entity.service';

@Injectable({
  providedIn: 'root'
})
export class ContactTypesFacade {
  constructor(private dtes: ContactTypesEntityService) {
  }

  contactTypes$ = this.dtes.entities$;
  errors$ = this.dtes.errors$;

  getAll() {
    this.dtes.getAll();
  }

  add(item: ContactTypes) {
    this.dtes.add(item);
  }

  remove(item: number) {
    this.dtes.delete(item);
  }

  update(item: ContactTypes) {
    this.dtes.update(item);
  }
}
