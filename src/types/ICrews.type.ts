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
  code: 0 | number
  crews: Array<ICrew>,
  time: string;
}