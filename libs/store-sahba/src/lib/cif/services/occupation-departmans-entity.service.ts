import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { OccupationDepartmans } from '../domains/occupation-departmans';

@Injectable({
  providedIn: 'root'
})
export class OccupationDepartmansEntityService extends EntityCollectionServiceBase<OccupationDepartmans> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('OccupationDepartmans', serviceElementsFactory);
  }

}
