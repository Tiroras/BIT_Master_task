export type ICrew = {
  id: number;
  car_mark: string;
  car_model: string;
  car_color: string;
  car_number: string;
  driver_name: string;
  driver_phone: string;
  lat: number;
  lon: number;
  distance: number;
}

export type TSuitableCrew = {
  code: number;
  crews: Array<ICrew>,
  time: string;
}

export type TAddresses = {
  address: string;
  lat: number;
  lon: number;
}

export type TCrewReq = {
  time: string;
  addresses: TAddresses;
}

export type TOrder = {
  time: string;
  descr: string;
  orderID: number;
}