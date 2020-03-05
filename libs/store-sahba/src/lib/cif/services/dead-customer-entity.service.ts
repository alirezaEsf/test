import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { DeadCustomerType } from '../domains/dead-customer-type';

@Injectable({
    providedIn: 'root'
})
export class DeadCustomerEntityService extends EntityCollectionServiceBase<DeadCustomerType> {

    constructor(
        serviceElementsFactory:
            EntityCollectionServiceElementsFactory) {

        super('DeadCustomerType', serviceElementsFactory);
    }

}
