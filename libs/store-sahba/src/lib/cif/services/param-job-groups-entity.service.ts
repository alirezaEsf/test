import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { ParamJobGroups } from '../domains/param-job-groups';

@Injectable({
  providedIn: 'root'
})
export class ParamJobGroupsEntityService extends EntityCollectionServiceBase<ParamJobGroups> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('ParamJobGroups', serviceElementsFactory);
  }

}
