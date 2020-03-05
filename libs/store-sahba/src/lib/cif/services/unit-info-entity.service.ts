import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { EmploymentType } from '../domains/employment-type';
import { UnitInfo } from '../domains/unit-info';

@Injectable({
  providedIn: 'root'
})
export class UnitInfoEntityService extends EntityCollectionServiceBase<UnitInfo> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('UnitsInfo', serviceElementsFactory);
  }

}
