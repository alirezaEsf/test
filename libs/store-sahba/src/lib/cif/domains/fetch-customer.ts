export interface FetchCustomer {
  customerId: number;
  customerType: number;
  customerCode?: number;
  firstName: string;
  lastName: string;
  birthDate: number;
  nationalCode: string;
  citizenshipType?: number;
  fatherName: string;
  registrationCityId?: number;
  registrationNumber?: number;
  gender: number;
  isAlive: number;
  status: number;
  customerState?: number;
  formerNationalCode?: number;
  currentNationalCode?: number;
  createChannelId?: number;
  createUnitId?: number;
  createUserId?: number;
  createDate?: number;
  shahabCode?: number;
}
