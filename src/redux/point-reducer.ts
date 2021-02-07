import {YMapsApi} from "react-yandex-maps";
import {ICrew} from "../types/ICrews.type";
import {setOrderAddressAC, setOrderLatAC, setOrderLonAC, setValidAC} from "./form-reducer";
import {setCrewFound, setCrewsAC, setSuitableCrewAC} from "./crew-reducer";
import {crewsAPI} from "../api/api";
import {Dispatch} from "react";


type TState = typeof initialState
type ActionTypes = ReturnType<typeof setPointCoordLat> | ReturnType<typeof setPointCoordLon> | ReturnType<typeof setAddressFound>;

const initialState = {
  point: {
    coordinates: {
      lat: 0,
      lot: 0
    },
    addressFound: false
  }
}

const pointReducer = (state: TState = initialState, action: ActionTypes) => {
  switch (action.type) {
    case "SET-ADDRESS-FOUND": {
      return {...state, point: {...state.point, addressFound: action.value}}
    }
    case "SET-POINT-COORDS-LAT": {
      return {...state, point: {...state.point, coordinates: {...state.point.coordinates, lat: action.value}}}
    }
    case "SET-POINT-COORDS-LON": {
      return {...state, point: {...state.point, coordinates: {...state.point.coordinates, lon: action.value}}}
    }
    default: return state
  }
}

export default pointReducer;

export const setPointCoordLat = (value: number) => ({type: "SET-POINT-COORDS-LAT", value} as const);
export const setPointCoordLon = (value: number) => ({type: "SET-POINT-COORDS-LON", value} as const);
export const setAddressFound = (value: boolean) => ({type: "SET-ADDRESS-FOUND", value} as const);


export const setPointOnMap = (coords: Array<number>, ymaps: YMapsApi) => (dispatch: Dispatch<any>) => {
  dispatch(setPointCoordLat(coords[0]));
  dispatch(setPointCoordLon(coords[1]));

  crewsAPI.getCrews().then(res => {
    ymaps.geocode(coords).then((response: any)=> {

      const geoObjt = response.geoObjects.get(0);
      if(geoObjt.getPremiseNumber()) {
        dispatch(setAddressFound(true));
        dispatch(setOrderLatAC(coords[0]));
        dispatch(setOrderLonAC(coords[1]));
        dispatch(setValidAC(true));

        res.map((crew: ICrew) => {
          return crew.distance = Math.round(ymaps.coordSystem.geo.getDistance([coords[0], coords[1]], [crew.lat, crew.lon]));
        });
        res.sort((a: ICrew, b: ICrew) => a.distance > b.distance ? 1 : -1);
        dispatch(setCrewsAC(res));
        dispatch(setSuitableCrewAC([res[0]]));
        dispatch(setCrewFound(true));
      }

      else {
        dispatch(setAddressFound(false));
        dispatch(setValidAC(false));
      }
      dispatch(setOrderAddressAC(geoObjt.getAddressLine()));
    });
  })
}

export const setPointByInput = (ymaps: YMapsApi, address: string) => (dispatch: any) => {
  let coords: Array<number> = [];

  dispatch(setOrderAddressAC(address));

  ymaps.geocode(address).then((response: any) => {
    const geoObj = response.geoObjects.get(0);
    coords = geoObj.geometry.getCoordinates();
    dispatch(setPointCoordLat(coords[0]));
    dispatch(setPointCoordLon(coords[1]));
  })


  crewsAPI.getCrews().then(res => {
    ymaps.geocode(coords).then((response: any)=> {
      const geoObjt = response.geoObjects.get(0);

      if(geoObjt.getPremiseNumber()) {
        dispatch(setAddressFound(true));
        dispatch(setValidAC(true));

        res.map((crew: ICrew) => {
          return crew.distance = Math.round(ymaps.coordSystem.geo.getDistance([coords[0], coords[1]], [crew.lat, crew.lon]));
        });
        res.sort((a: ICrew, b: ICrew) => a.distance > b.distance ? 1 : -1);
        dispatch(setCrewsAC(res));
        dispatch(setSuitableCrewAC([res[0]]));
        dispatch(setCrewFound(true));
      }

      else {
        dispatch(setAddressFound(false));
        dispatch(setValidAC(false));
      }
    });
  });
}

export const setPointBySelect = (ymaps: YMapsApi, address: string) => (dispatch: Dispatch<any>) => {
  let coords: Array<number> = [];

  dispatch(setOrderAddressAC(address))

  ymaps.geocode(address).then((response: any) => {
    const geoObj = response.geoObjects.get(0);
    coords = geoObj.geometry.getCoordinates();
    dispatch(setPointCoordLat(coords[0]));
    dispatch(setPointCoordLon(coords[1]));
  })


  crewsAPI.getCrews().then(res => {
    ymaps.geocode(coords).then((response: any) => {
      const geoObjt = response.geoObjects.get(0);

      if (geoObjt.getPremiseNumber()) {
        dispatch(setAddressFound(true));
        dispatch(setValidAC(true));

        res.map((crew: ICrew) => {
          return crew.distance = Math.round(ymaps.coordSystem.geo.getDistance([coords[0], coords[1]], [crew.lat, crew.lon]));
        });
        res.sort((a: ICrew, b: ICrew) => a.distance > b.distance ? 1 : -1);
        dispatch(setCrewsAC(res));
        dispatch(setSuitableCrewAC([res[0]]));
        dispatch(setCrewFound(true));
      } else {
        dispatch(setAddressFound(false));
        dispatch(setValidAC(false));
      }
    });
  });
}