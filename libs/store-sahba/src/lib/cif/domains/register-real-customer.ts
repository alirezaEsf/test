export interface RegisterRealCustomer {
  'identityInfo': {
    'customerId':number,
    'nationalCode': string,
    'shahabCode': number,
    'isAlive': number,
    'firstName': string,
    'lastName': string,
    'birthDate': number,
    'fatherName': string,
    'identityNumber': number,
    'identityAlphabeticPart': string,
    'identityNumericPart': number,
    'identitySerial': number,
    'gender': number,
    'isInquiryApproved': number,
    'birthCountryId': string,
    'birthCityId'?: string,
    'identityIssueRegion': string,
    'identityType': string,
    'identityDate': string,
    'nationalCardSerial'?: string,
    'residenceTypeId': string,
    'religionId'?: string,
    'religionDetailId'?: string,
    'maritalStatus': string,
    'enFirstName'?: string,
    'enLastName'?: string,
    'enFatherName'?: string,
    'enBirthDate'?: string,
    'identityissueCityId': number
  },
  'identityChangeFlag'?: string,
  'contactsList'?: [
    {
      'contactType'?: string,
      'provinceId': string,
      'cityId': string,
      'area'?: string,
      'contactValue': string,
      'postalCode'?: string,
      'telNumber'?: string,
      'inHabitancyType'?: string,
      'startDate': string,
      'endDate'?: string,
      'isDefault'?: number,
      'contactGroupType': string,
      'operationFlag'?: string
    },
    {
      'contactGroupType': string,
      'contactType'?: string,
      'contactValue': string,
      'isDefault'?: number,
      'startDate': string,
      'endDate'?: string,
      'operationFlag'?: string
    }
  ],
  'contactChangeFlag'?: number,
  'activityInfo'?: {
    'occupationList'?: [
      {
        'occupationDepartmanId': string,
        'occupationGroupId': string,
        'occupationSectionId'?: string,
        'occupationDetail'?: string,
        'startDate': string,
        'endDate'?: number,
        'operationFlag'?: string
      }
    ],
    'jobsList'?: [
      {
        'jobGroupId': string,
        'jobId'?: string,
        'description'?: string,
        'startDate': string,
        'endDate'?: number,
        'operationFlag'?: string
      }
    ]
  },
  'activityInfoChangeFlag'?: number,
  'occupationPlaceList'?: [
    {
      'occupationDepartmanId': string,
      'placeType': string,
      'hasGoodwill': number,
      'area'?: string,
      'startDate': string,
      'endDate'?: number,
      'provinceId': string,
      'cityId': string,
      'address': string,
      'postalCode': string,
      'telephoneNo': string,
      'mobileNo': string,
      'inhabitancyType': string,
      'operationFlag'?: string
    }
  ],
  'occupationPlaceChangeFlag'?: number,
  'individualEducationList'?: [
    {
      'degreeId': string,
      'majorId'?: string,
      'areaOfInterest'?: string,
      'academyId'?: string,
      'academyName'?: string,
      'certificateNumber'?: string,
      'academyCountryId'?: number,
      'academyCityId'?: string,
      'startDate'?: string,
      'endDate'?: string,
      'operationFlag'?: string
    }
  ],
  'educationChangeFlag'?: number,
  'customerExtendInfo'?: {
    'familyMembersCount'?: number,
    'dependentPersonCount'?: number,
    'childrenCount'?: number,
    'maritalStatusDate'?: string,
    'fameDescription'?: string,
    'isApproved'?: number,
    'intervalEmployment'?: number,
    'isIncapable'?: number,
    'isDisable'?: number,
    'employmentTypeId'?: string,
    'employmentNumber'?: number,
    'disabilityList'?: {
      'disabilityTypeId': number,
      'operationFlag': string
    }[],
    'veteranList'?:{
      'veteranTypeId': number,
      'veteranPercent': number,
      'expireDate'?: number,
      'operationFlag': string
    } [
    ]
  },
  'extendChangeFlag'?: number,
  'businessInformation'?: {
    'businessActivityList'?: [
      {
        'declareNumber': number,
        'employeeCount'?: string,
        'declareStartDate': string,
        'declareEndDate'?: string,
        'operationFlag'?: string
      }
    ],
    'commercialCardList'?: [
      {
        'commercialCardType': string,
        'cardNumber': number,
        'issueDate': string,
        'expirationDate': string,
        'ownerName'?: string,
        'operationFlag'?: string
      }
    ],
    'economicCode'?: string,
    'income'?: number,
    'membershipCode'?: string
  },
  'bussinessChangeFlag'?: number,
  'individualPassportList'?: [
    {
      'passportNumber': string,
      'countryId': string,
      'passportIssueDate': string,
      'passportExpirationDate': string,
      'description'?: string,
      'operationFlag'?: string
    }
  ],
  'passportChangeFlag'?: number,
  'relationships'?: [
    {
      'relationshipTypeId': string,
      'relationshipDetailId'?: number,
      'startDate': string,
      'endDate'?: string,
      'certificateNumber'?: string,
      'certificateDate'?: string,
      'certificateIssueCityId'?: string,
      'description'?: string,
      'sharePercent'?: string,
      'shareValue'?: string,
      'lastBuyDate'?: string,
      'operationFlag'?: string,
      'relatedCustomerId': number
    }
  ],
  'relationshipChangeFlag'?: number,
  'signList'?: [
    {
      'signType': string,
      'handNo'?: number,
      'fingerNo'?: number,
      'signDescription'?: string,
      'signValue': string,
      'operationFlag'?: string
    }
  ],
  'signChangeFlag'?: number
}
