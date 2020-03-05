import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { EmploymentType } from '../domains/employment-type';
import { EducationMajorGroup } from '../domains/education-majorGroup';

@Injectable({
  providedIn: 'root'
})
export class EdcuationMajorGroupEntityService extends EntityCollectionServiceBase<EducationMajorGroup> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('EducationMajorGroup', serviceElementsFactory);
  }

}
