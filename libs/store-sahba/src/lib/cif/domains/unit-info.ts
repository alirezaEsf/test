export interface UnitInfo {
  'unitInfo': {
    'id': number, 'title': string, 'enTitle': string, 'cbiCode': string,
    'unitCode': number, 'accountingCode': number, 'operationType': number, 'geoLatitude': number,
    'geoLongitude': number, 'unitGrade': number, 'gradeChangeDate': number, 'mergeStatus': number,
    'mergeUnitId': number, 'employeeCount': number, 'unitCurrencyCode': number, 'bicCode': string,
    'countryId': number, 'provinceId': number, 'cityId': number, 'regionType': number, 'inhabitancyType': number,
    'cbiLicenseNumber': string, 'cbiLicenseDate': number, 'bodLicenseNumber': string, 'bodLicenseDate': number,
    'locationType': number, 'nextBranchId': number, 'nextBranchDistance': number, 'nextBankId': number,
    'nextBankBranch': '', 'nextBankDistance': number, 'parentUnitDistance': number, 'startDate': number,
    'endDate': number, 'unitType': number, 'departmentType': number, 'createChannelId': number, 'createUnitId': number,
    'createUserId': number, 'createDate': number, 'editUserId': number, 'editDate': number,
    'utime': number
  },
  'contactList': {
    'id': number, 'unitId': number, 'contactGroupType': number, 'contactValue': string,
    'endDate': number, 'ownerType': number, 'ownerName': '', 'createChannelId': number,
    'createUnitId': number, 'createUserId': number, 'createDate': number, 'editUserId': number,
    'editDate': number, 'utime': number
  }[],
  'addressList'?: [],
  'featureList'?: [],
  'calendarInfo': {
    'id': number, 'unitId': number, 'calendarId': number, 'endDate': number,
    'createUserId': number, 'createDate': number, 'editUserId': number, 'utime': number
  },
  'shiftInfo': {
    'id': number, 'unitId': number, 'shiftId': number, 'endDate': number, 'createUserId': number,
    'createDate': number, 'editUserId': number, 'utime': number
  },
  'relationshipInfo': {
    'unitId': number, 'branchId': number, 'areaUnitId': number,
    'residentUnitId': number, 'managementUnitId': number, 'createChannelId': number, 'createUnitId': number,
    'createUserId': number, 'createDate': number, 'editUserId': number, 'editDate': number,
    'utime': number, 'branchTitle': string, 'areaUnitTitle': string,
    'managementUnitTitle': string, 'residentUnitTitle': string
  }
}
