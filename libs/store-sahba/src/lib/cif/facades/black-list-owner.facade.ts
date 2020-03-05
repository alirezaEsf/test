import {Injectable} from '@angular/core';
import {BlackListOwnerEntityService} from '../services/black-list-owner-entity.service';
import {BlackListOwner} from '../domains/black-list-owner';

@Injectable({
    providedIn: 'root'
})
export class BlackListOwnerFacade {
    constructor(private dtes: BlackListOwnerEntityService) {
    }

    blackListOwner$ = this.dtes.entities$;
    errors$ = this.dtes.errors$

    getAll() {
        this.dtes.getAll();
    }

    add(item: BlackListOwner) {
        this.dtes.add(item);
    }

    remove(item: BlackListOwner) {
        this.dtes.delete(item);
    }

    update(item: BlackListOwner) {
        this.dtes.update(item);
    }
}
