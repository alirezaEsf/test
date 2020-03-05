import { Injectable } from '@angular/core';
import {DeadCustomerType} from "../domains/dead-customer-type";
import {DeadCustomerEntityService} from "../services/dead-customer-entity.service";
import {map, switchMap} from "rxjs/operators";
import {empty} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DeadCustomerFacade {
    constructor(private dtes: DeadCustomerEntityService) {
    }

    customer = this.dtes.entities$.pipe(map(t=> {

        return t[0]
    }));

    errors = this.dtes.errors$;

    getAll() {
        this.dtes.getAll();
    }

    add(item: DeadCustomerType) {
        this.dtes.add(item);
    }

    getByQuery(fetchType: string, value: string) {
        return this.dtes.getByKey({ fetchType : fetchType, value : value });
    }


}
