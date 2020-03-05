import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@osveh/data-kit';
import { CountryType} from "../domains/country-type";

@Injectable({
  providedIn: 'root'
})
export class CountriesManagementEntityService extends EntityCollectionServiceBase<CountryType> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('CountryType', serviceElementsFactory);
  }

}
