import { Injectable } from '@angular/core';
import {IndividualBatchFileDetailService} from "../services/individual-batch-file-detail.service";
import {IndividualBatchFileDetail} from "../domains/individual-batch-file-detail";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class  IndividualBatchFileDetailSearchFacade{
  constructor(private dtes: IndividualBatchFileDetailService) {
  }

    IndividualBatchFileDetailList = this.dtes.entities$.pipe(map(l=>{
        return l;
    }));


  getAll() {
    this.dtes.getAll();
  }

    add(item: IndividualBatchFileDetail ) {
        this.dtes.add(item);
    }

    remove(item: IndividualBatchFileDetail) {
        this.dtes.delete(item);
    }

    update(item: IndividualBatchFileDetail) {
        this.dtes.update(item);
    }
    getById(fileId: string){
        this.dtes.getByKey( {'fileId':fileId});
    }
}
