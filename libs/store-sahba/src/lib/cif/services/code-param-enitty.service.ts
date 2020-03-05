import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { CodeParam } from '../domains/code-param';

@Injectable({
  providedIn: 'root'
})
export class CodeParamEnittyService extends EntityCollectionServiceBase<CodeParam> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('CodeParam', serviceElementsFactory);
  }

}
