import { Injectable } from '@angular/core';
import { IndividualBatchService } from '../services/individual-batch.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class IndividualBatchSearchFacade {
  constructor(private dtes: IndividualBatchService) {
  }

  individualBatch = this.dtes.entities$.pipe(map(l => {
    return l;
  }));

  //errors$ = this.dtes.errors$;

  getAll() {

    this.dtes.getAll();

  }

  getByQuery(fromDate: string, toDate: string) {

    return this.dtes.getWithQuery({ fromDate: fromDate, toDate: toDate });

  }

}
