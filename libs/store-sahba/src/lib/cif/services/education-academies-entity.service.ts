import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { EducationAcademies } from '../domains/education-academies';

@Injectable({
  providedIn: 'root'
})
export class EducationAcademiesEntityService extends EntityCollectionServiceBase<EducationAcademies> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('EducationAcademies', serviceElementsFactory);
  }

}
