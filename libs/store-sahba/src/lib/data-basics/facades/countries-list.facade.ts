import {Injectable} from '@angular/core';
import { CountryType} from '../domains/country-type';
import {CountriesManagementEntityService} from '../services/countries-management-entity.service';

@Injectable({
    providedIn: 'root'
})
export class CountriesListFacade {
    constructor(private cles: CountriesManagementEntityService) {
    }

    countriesList$ = this.cles.entities$;
    errors$ = this.cles.errors$

    getAll() {
        this.cles.getAll();
    }

    add(item: CountryType) {
        this.cles.add(item);
    }

    remove(item: CountryType) {
        this.cles.delete(item);
    }

    update(item: CountryType) {
        this.cles.update(item);
    }
}
