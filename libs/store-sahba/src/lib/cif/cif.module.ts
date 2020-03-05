import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { cifReducer } from './store/cif.reducer';
import {
  BlackListTypesFacade,
  DisabilityTypesFacade, OccupationDepartmansFacade, OccupationGroupFacade,
  OccupationSectionsFacade, ParamJobGroupsFacade, ParamJobsFacade, RelationShipDetailFacade, RelationShipTypeFacade,
  ReligionDetailTypesFacade,
  ReligionTypesFacade
} from './facades';
import { entityMetadata } from './store/cif.entitymap';
import {
  AdvanceIndividualCustomer,
  BlackListType,
  DisabilityType,
  EducationAcademies,
  EducationDegrees, IndividualCustomer,
  OccupationDepartmans, OccupationGroup, OccupationSections, ParamJobGroups, ParamJobs,
  ParamProvinces, RelationShipDetail, RelationShipType, ReligionType, ReligionTypeDetail,
  WorkPlaceTypes
} from './domains';
import { SahbaDataServiceFactory } from '../common/entity-data-service';
import { RelationshipsRules } from './domains/relationships-rules';
import { FetchCustomer } from './domains/fetch-customer';
import { ContactTypes } from './domains/contact-types';
import { RegisterRealCustomer } from './domains/register-real-customer';
import {BlackListOwner} from "./domains/black-list-owner";
import {DeadCustomerType} from "./domains/dead-customer-type";
import {DeadCustomerFacade} from "./facades/dead-customer.facade";
import { CodeParam } from './domains/code-param';
import { RCustomerInquiry } from './domains/rCustomer-inquiry';
import { EmploymentType } from './domains/employment-type';
import { EducationMajor } from './domains/education-major';
import { VeteranType } from './domains/veteran-type';
import { ParamCountry } from './domains/param-country';
import { EducationMajorGroup } from './domains/education-majorGroup';
import { ParamCity } from './domains/param-city';
import { EntityDataService, EntityDefinitionService } from '@osveh/data-kit';
import { ApproveRcustomer } from './domains/approve-rcustomer';
import { UnitInfo } from './domains/unit-info';
import {CustomerSearchFacade} from './facades/customer-search.facade';
import {IndividualBatchFileDetailSearchFacade} from './facades/individual-batch-file-detail-search.facade';
import {IndividualBatchSearchFacade} from './facades/individual-batch-search.facade';
import {Customer} from './domains/customer';
import {IndividualBatch} from './domains/individual-batch';
import {IndividualBatchFileDetail} from './domains/individual-batch-file-detail';



export * from './domains';
export * from './facades';



@NgModule({
  declarations: [],
  providers: [
    DisabilityTypesFacade,
    BlackListTypesFacade,
    ReligionTypesFacade,
    ReligionDetailTypesFacade,
    RelationShipTypeFacade,
    RelationShipDetailFacade,
    ParamJobsFacade,
    ParamJobGroupsFacade,
    OccupationSectionsFacade,
    OccupationGroupFacade,
    OccupationDepartmansFacade,
    DisabilityTypesFacade,
    DeadCustomerFacade,
    DisabilityTypesFacade,
      IndividualBatchSearchFacade,
      IndividualBatchFileDetailSearchFacade,
      CustomerSearchFacade
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('cif', cifReducer),
    EffectsModule.forFeature([])
  ]
})
export class CifStoreModule {
  constructor(private entityDefinitionService: EntityDefinitionService,
              private entityDataService: EntityDataService,
              private serviceFactory: SahbaDataServiceFactory
  ) {

    entityDefinitionService.registerMetadataMap(entityMetadata);
    entityDataService.registerService<DisabilityType>('DisabilityType', serviceFactory.create<DisabilityType>('DisabilityType'));
    entityDataService.registerService<BlackListType>('BlackListType', serviceFactory.create<BlackListType>('BlackListType'));
    entityDataService.registerService<ReligionType>('ReligionType', serviceFactory.create<ReligionType>('ReligionType'));
    entityDataService.registerService<ReligionTypeDetail>('ReligionTypeDetail', serviceFactory.create<ReligionTypeDetail>('ReligionTypeDetail'));
    entityDataService.registerService<RelationShipDetail>('RelationShipDetail', serviceFactory.create<RelationShipDetail>('RelationShipDetail'));
    entityDataService.registerService<RelationShipType>('RelationShipType', serviceFactory.create<RelationShipType>('RelationShipType'));


    entityDataService.registerService<ParamJobs>('ParamJobs', serviceFactory.create<ParamJobs>('ParamJobs'));
    entityDataService.registerService<ParamJobGroups>('ParamJobGroups', serviceFactory.create<ParamJobGroups>('ParamJobGroups'));
    entityDataService.registerService<OccupationSections>('OccupationSections', serviceFactory.create<OccupationSections>('OccupationSections'));
    entityDataService.registerService<OccupationGroup>('OccupationGroup', serviceFactory.create<OccupationGroup>('OccupationGroup'));
    entityDataService.registerService<OccupationDepartmans>('OccupationDepartmans', serviceFactory.create<OccupationDepartmans>('OccupationDepartmans'));
    entityDataService.registerService<WorkPlaceTypes>('WorkPlaceTypes', serviceFactory.create<WorkPlaceTypes>('WorkPlaceTypes'));
    entityDataService.registerService<ParamProvinces>('ParamProvinces', serviceFactory.create<ParamProvinces>('ParamProvinces'));
    entityDataService.registerService<EducationAcademies>('EducationAcademies', serviceFactory.create<EducationAcademies>('EducationAcademies'));
    entityDataService.registerService<EducationDegrees>('EducationDegrees', serviceFactory.create<EducationDegrees>('EducationDegrees'));

    entityDataService.registerService<VeteranType>('VeteranType', serviceFactory.create<VeteranType>('VeteranType'));
    entityDataService.registerService<EmploymentType>('EmploymentType', serviceFactory.create<EmploymentType>('EmploymentType'));
    entityDataService.registerService<EducationMajor>('EducationMajor', serviceFactory.create<EducationMajor>('EducationMajor'));
    entityDataService.registerService<EducationMajorGroup>('EducationMajorGroup', serviceFactory.create<EducationMajorGroup>('EducationMajorGroup'));
    entityDataService.registerService<ParamCity>('ParamCities', serviceFactory.create<ParamCity>('ParamCities'));
    entityDataService.registerService<ParamCountry>('ParamCountry', serviceFactory.create<ParamCountry>('ParamCountry'));
    entityDataService.registerService<CodeParam>('CodeParam', serviceFactory.create<CodeParam>('CodeParam'));
    entityDataService.registerService<RCustomerInquiry>('RCustomerInquiry', serviceFactory.create<RCustomerInquiry>('RCustomerInquiry'));
    entityDataService.registerService<RegisterRealCustomer>('RegisterRealCustomer', serviceFactory.create<RegisterRealCustomer>('RegisterRealCustomer'));
    entityDataService.registerService<ContactTypes>('ContactTypes', serviceFactory.create<ContactTypes>('ContactTypes'));
    entityDataService.registerService<FetchCustomer>('FetchCustomer', serviceFactory.create<FetchCustomer>('FetchCustomer'));
    entityDataService.registerService<RelationshipsRules>('RelationshipsRules', serviceFactory.create<RelationshipsRules>('RelationshipsRules'));
    entityDataService.registerService<BlackListOwner>('BlackListOwner', serviceFactory.create<BlackListOwner>('BlackListOwner'));
    entityDataService.registerService<DeadCustomerType>('DeadCustomerType', serviceFactory.create<DeadCustomerType>('DeadCustomerType'));
    entityDataService.registerService<ApproveRcustomer>('ApproveRcustomer', serviceFactory.create<ApproveRcustomer>('ApproveRcustomer'));
    entityDataService.registerService<UnitInfo>('UnitsInfo', serviceFactory.create<UnitInfo>('UnitsInfo'));
    entityDataService.registerService<IndividualCustomer>('IndividualCustomer', serviceFactory.create<IndividualCustomer>('IndividualCustomer'));
    entityDataService.registerService<AdvanceIndividualCustomer>('AdvanceIndividualCustomer', serviceFactory.create<AdvanceIndividualCustomer>('AdvanceIndividualCustomer'));
      entityDataService.registerService<Customer>('Customer', serviceFactory.create<Customer>('Customer'));
      entityDataService.registerService<IndividualBatch>('IndividualBatch', serviceFactory.create<IndividualBatch>('IndividualBatch'));
      entityDataService.registerService<IndividualBatchFileDetail>('IndividualBatchFileDetail', serviceFactory.create<IndividualBatchFileDetail>('IndividualBatchFileDetail'));

  }
}





