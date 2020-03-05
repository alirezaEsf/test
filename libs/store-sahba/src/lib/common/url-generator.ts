import { Injectable } from '@angular/core';
import { DefaultHttpUrlGenerator, EntityHttpResourceUrls, HttpResourceUrls, HttpUrlGenerator, normalizeRoot, Pluralizer }
  from '@osveh/data-kit';
import { HttpUrls } from './http-result';


const urls: HttpUrls[] = [
  {
    name: 'DisabilityType',
    find: 'ttcp/deposit/services/cif/findalldisabilitytypes',
    create: 'ttcp/deposit/services/cif/createdisabilitytype',
    update: 'ttcp/deposit/services/cif/deletedisabilitytype',
    delete: 'ttcp/deposit/services/cif/editdisabilitytype'

  },
  {
    name: 'BlackListType',
    find: 'ttcp/deposit/services/cif/findallblacklisttypes',
    create: 'ttcp/deposit/services/cif/createblacklisttype',
    update: 'ttcp/deposit/services/cif/editblacklisttype',
    delete: 'ttcp/deposit/services/cif/deleteblacklisttype'
  },
  {
    name: 'ReligionType',
    find: 'ttcp/deposit/services/cif/findallparamreligions1',
    create: 'ttcp/deposit/services/cif/createparamreligion',
    update: 'ttcp/deposit/services/cif/updateparamreligion',
    delete: 'ttcp/deposit/services/cif/deleteparamreligion'
  },
  {
    name: 'ReligionTypeDetail',
    find: 'ttcp/deposit/services/cif/findallparamreligiondetails',
    create: 'ttcp/deposit/services/cif/createparamreligiondetail',
    update: 'ttcp/deposit/services/cif/updateparamreligiondetail',
    delete: 'ttcp/deposit/services/cif/deleteparamreligiondetail'
  },
  {
    name: 'RelationShipDetail',
    find: 'ttcp/deposit/services/cif/findallrelationshipdetails',
    create: 'ttcp/deposit/services/cif/createrelationshipdetail',
    update: 'ttcp/deposit/services/cif/editrelationshipdetail',
    delete: 'ttcp/deposit/services/cif/deleterelationshipdetail'
  },
  {
    name: 'RelationShipType',
    find: 'ttcp/deposit/services/cif/findallrelationshiptypes',
    create: 'ttcp/deposit/services/cif/createrelationshipdetail',
    update: 'ttcp/deposit/services/cif/editrelationshipdetail',
    delete: 'ttcp/deposit/services/cif/deleterelationshipdetail'
  },
  {
    name: 'ParamJobs',
    find: 'ttcp/deposit/services/cif/findallparamjobs',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'ParamJobGroups',
    find: 'ttcp/deposit/services/cif/findallparamjobgroups',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'OccupationSections',
    find: 'ttcp/deposit/services/cif/findalloccupationgroup',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'OccupationGroup',
    find: 'ttcp/deposit/services/cif/findalloccupationsections',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'OccupationDepartmans',
    find: 'ttcp/deposit/services/cif/findalloccupationdepartmans',
    create: '',
    update: '',
    delete: ''
  }
  ,
  {
    name: 'BlackListOwner',
    find: 'ttcp/deposit/services/cif/findallblacklistowners',
    create: 'ttcp/deposit/services/cif/createblacklistowner',
    update: 'ttcp/deposit/services/cif/editblacklistowner',
    delete: 'ttcp/deposit/services/cif/deleteblacklistowners'
  }
  , {
    name: 'WorkPlaceTypes',
    find: 'ttcp/deposit/services/cif/findallworkplacetypes',
    create: '',
    update: '',
    delete: ''
  }
  , {
    name: 'ParamProvinces',
    find: 'ttcp/deposit/services/coreparam/findallparamprovinces',
    create: '',
    update: '',
    delete: ''
  }
  , {
    name: 'VeteranType',
    find: 'ttcp/deposit/services/cif/findallveterantypes',
    create: 'ttcp/deposit/services/cif/createveterantype',
    update: 'ttcp/deposit/services/cif/editveterantype',
    delete: 'ttcp/deposit/services/cif/deleteveterantype'
  },
  {
    name: 'EmploymentType',
    find: 'ttcp/deposit/services/cif/findallemploymenttypes',
    create: 'ttcp/deposit/services/cif/createemploymenttype',
    update: 'ttcp/deposit/services/cif/editemploymenttype',
    delete: 'ttcp/deposit/services/cif/deleteemploymenttype'
  },
  {
    name: 'EducationMajor',
    find: 'ttcp/deposit/services/cif/findalleducationmajors',
    create: 'ttcp/deposit/services/cif/createeducationmajor',
    update: 'ttcp/deposit/services/cif/editeducationmajor',
    delete: 'ttcp/deposit/services/cif/deleteeducationmajor',
    itemKey: 'educationMajorID'
  },
  {
    name: 'EducationMajorGroup',
    find: 'ttcp/deposit/services/cif/findalleducationmajorgroups',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'ParamCountry',
    find: 'ttcp/deposit/services/coreparam/findallparamcountries',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'ParamCities',
    find: 'ttcp/deposit/services/coreparam/findallparamcities',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'CodeParam',
    find: 'ttcp/deposit/services/coreparam/findallcodes',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'EducationAcademies',
    find: 'ttcp/deposit/services/cif/findalleducationacademies',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'EducationDegrees',
    find: 'ttcp/deposit/services/cif/findalleducationdegrees',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'RCustomerInquiry',
    find: 'ttcp/deposit/services/inquiry/findindividualidentityinfo',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'RegisterRealCustomer',
    find: 'ttcp/deposit/services/cif/saveindividualcustomerinfo',
    create: 'ttcp/deposit/services/cif/saveindividualcustomerinfo',
    update: '',
    delete: ''
  },
  {
    name: 'ContactTypes',
    find: 'ttcp/deposit/services/cif/findallcontacttypes',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'FetchCustomer',
    find: 'ttcp/deposit/services/cif/fetchcustomer',
    create: '',
    update: '',
    delete: ''
  },
  {
    name: 'RelationshipsRules',
    find: 'ttcp/deposit/services/cif/findallrelationshipsrules',
    create: '',
    update: '',
    delete: ''
  },
    {
        name: 'CountryType',
        find: 'ttcp/deposit/services/coreparam/findallparamcountries',
        create: 'ttcp/deposit/services/coreparam/createparamcountry',
        update: 'ttcp/deposit/services/coreparam/updateparamcountry',
        delete: ''
    },

    {
        name: 'DeadCustomerType',
        find: 'ttcp/deposit/services/cif/findcustomertodeclaredeath',
        create: 'ttcp/deposit/services/cif/savecustomerdeathdetail',
        update: 'ttcp/deposit/services/coreparam/updateparamcountry',
        delete: ''
    },
    {
        name: 'ApproveRcustomer',
        find: '',
        create: 'ttcp/deposit/services/inquiry/approveindividualcustomerinfo',
        update: '',
        delete: ''
    },
    {
        name: 'UnitsInfo',
        find: 'ttcp/deposit/services/coreparam/findunitinfo',
        create: '',
        update: '',
        delete: ''
    },
    {
        name: 'Customer',
        find: 'ttcp/deposit/services/cif/findcustomertodeclaredeath',
        create: '',
        update: '',
        delete: ''

    }
    ,
    {
        name: 'FetchCustomer',
        find: 'ttcp/deposit/services/cif/fetchcustomer',
        create: '',
        update: '',
        delete: ''
    },
    {
        name: 'IndividualBatch',
        find: 'ttcp/deposit/services/cif/findindividualbatchfile',
        create: '',
        update: '',
        delete: ''

    }
    ,
    {
        name: 'IndividualBatchFileDetail',
        find: 'ttcp/deposit/services/cif/findindividualbatchfiledetail',
        create: 'ttcp/deposit/services/inquiry/saveindividualbatchfile',
        update: '',
        delete: ''



    },



  {
    name: 'IndividualCustomer',
    find: 'ttcp/deposit/services/cif/simplesearchindividualcustomer',
    create: '',
    update: '',
    delete: ''
  },  {
    name: 'AdvanceIndividualCustomer',
    find: 'ttcp/deposit/services/cif/AdvanceSearchIndividualCustomer',
    create: '',
    update: '',
    delete: ''
  },

];


@Injectable()
export class SahbaHttpUrlGenerator extends DefaultHttpUrlGenerator {
  getFindUrl(entityName: string, root: string): string {
    return root + urls.filter((u) => u.name === entityName)[0].find;
  }

  getCreateUrl(entityName: string, root: string): string {
    return root + urls.filter((u) => u.name === entityName)[0].create;
  }

  getDeleteUrl(entityName: string, root: string) {
    return root + urls.filter((u) => u.name === entityName)[0].delete;

  }

  getUpdateUrl(entityName: string, root: string) {
    return root + urls.filter((u) => u.name === entityName)[0].update;
  }

  getItemKey(entityName: string){
    return  urls.filter((u) => u.name === entityName)[0].itemKey || 'id';
  }
}
