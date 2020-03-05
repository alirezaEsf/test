import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { OccupationSections } from '../domains/occupation-sections';

@Injectable({
  providedIn: 'root'
})
export class OccupationSectionsEntityService extends EntityCollectionServiceBase<OccupationSections> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('OccupationSections', serviceElementsFactory);
  }

}
