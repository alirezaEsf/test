import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { ParamJobs } from '../domains/param-jobs';

@Injectable({
  providedIn: 'root'
})
export class ParamJobsEntityService extends EntityCollectionServiceBase<ParamJobs> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('ParamJobs', serviceElementsFactory);
  }

}
