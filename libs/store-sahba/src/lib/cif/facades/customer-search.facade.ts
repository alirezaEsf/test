import { Injectable } from '@angular/core';
import {CustomerEntityService} from "../services/customer-entity.service";

import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerSearchFacade {
  constructor(private dtes: CustomerEntityService) {
  }

    customer = this.dtes.entities$.pipe(map(t=> {
        return t[0]
    }));
    errors$ = this.dtes.errors$;


  getAll() {
    this.dtes.getAll();
  }


    getByQuery(fetchType: string, value: string) {
        return this.dtes.getByKey({ fetchType: fetchType, value: value });
    }
}
