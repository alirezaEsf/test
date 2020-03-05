import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { EmploymentType } from '../domains/employment-type';
import { EducationMajor } from '../domains/education-major';

@Injectable({
  providedIn: 'root'
})
export class EducatiomMajorEntityService extends EntityCollectionServiceBase<EducationMajor> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('EducationMajor', serviceElementsFactory);
  }

}
