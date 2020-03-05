import {CustomerInfoFile} from "./customer-info-file";

export  interface IndividualBatchFileDetail {

    individualBatchFileDetail:CustomerInfoFile[];
    createChannelId:number;
    acceptedRows:number;
    unAcceptedRows:number;
    createDate:string;
    createUnitId:number;
    editUserId:number;
    id:number;
    liveRows:number;
    totalRows:number;
    fileName:string;
    description:string;
    fileDate:string;
    duplicateCustomerRows:number;
    exceptionOnInsertRows:number;
    editDate:string;
    utime:string;
    customerRows:number;

}