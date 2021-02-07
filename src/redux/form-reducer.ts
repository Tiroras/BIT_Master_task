import {Nullable} from "../types/Store.types";
import {YMapsApi} from "react-yandex-maps";


type IState = typeof initialState;
type ActionTypes = ReturnType<typeof setOrderAddressAC> |
  ReturnType<typeof setOrderLonAC> |
  ReturnType<typeof setOrderLatAC> |
  ReturnType<typeof setYMapsAC> |
  ReturnType<typeof setOrderCrewIDAC> |
  ReturnType<typeof setValidAC>;

const initialState = {
  order: {
    order_id: 1,
    addresses: {
      address: "",
      lat: 0,
      lon: 0
    },
    crew_id: 0
  },
  ymaps: null as Nullable<YMapsApi>,
  isValid: true
}

const formReducer = (state: IState = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "SET-ORDER-ADDRESS": {
      return {...state, order: {...state.order, addresses: {...state.order.addresses, address: action.address}}}
    }
    case "SET-ORDER-LAT": {
      return {...state, order: {...state.order, addresses: {...state.order.addresses, lat: action.lat}}}
    }
    case "SET-ORDER-LON": {
      return {...state, order: {...state.order, addresses: {...state.order.addresses, lon: action.lon}}}
    }
    case "SET-YMAPS": {
      return {...state, ymaps: action.ymaps}
    }
    case "SET-ORDER-CREW": {
      return {...state, order : {...state.order, crew_id: action.id}}
    }
    case "SET-VALID": {
      return {...state, isValid: action.value}
    }
    default: return state;
  }
}

export const setOrderAddressAC = (address: string) => ({type: "SET-ORDER-ADDRESS", address} as const);
export const setOrderLatAC = (lat: number) => ({type: "SET-ORDER-LAT", lat} as const);
export const setOrderLonAC = (lon: number) => ({type: "SET-ORDER-LON", lon} as const);
export const setYMapsAC = (ymaps: any) => ({type: "SET-YMAPS", ymaps} as const);
export const setOrderCrewIDAC = (id: number) => ({type: "SET-ORDER-CREW", id} as const);
export const setValidAC = (value: boolean) => ({type: "SET-VALID", value} as const);


export default formReducer;