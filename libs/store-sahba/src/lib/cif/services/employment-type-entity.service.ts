import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { EmploymentType } from '../domains/employment-type';

@Injectable({
  providedIn: 'root'
})
export class EmploymentTypeEntityService extends EntityCollectionServiceBase<EmploymentType> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('EmploymentType', serviceElementsFactory);
  }

}
