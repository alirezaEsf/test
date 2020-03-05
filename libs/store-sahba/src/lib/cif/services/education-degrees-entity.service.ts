import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { EducationDegrees } from '../domains/education-degrees';

@Injectable({
  providedIn: 'root'
})
export class EducationDegreesEntityService extends EntityCollectionServiceBase<EducationDegrees> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('EducationDegrees', serviceElementsFactory);
  }

}
