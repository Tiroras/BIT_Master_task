import React from 'react';
import DisplayMap from "./DisplayMap";
import {connect} from "react-redux";
import {setOrderAddressAC, setYMapsAC} from "../../../../redux/form-reducer";
import {YMapsApi} from "react-yandex-maps";
import {setPointByInput, setPointOnMap} from "../../../../redux/point-reducer";
import {ReducerType} from "../../../../redux/store";
import {ICrew, TSuitableCrew} from "../../../../types/ProjTypes.types";


interface ICoords {
  lat: number;
  lon: number;
}

interface IAddresses extends ICoords{
  address: string;
}

interface IProps {
  addresses: IAddresses;
  crews: Array<ICrew>;
  suitableCrew: TSuitableCrew;
  ymaps: YMapsApi;
  pointCoords: ICoords;
  addressFound: boolean;
  suitableCrewFound: boolean;
  setPointOnMap: (coords: Array<number>, ymaps: YMapsApi) => void;
  setYMapsAC: (ymaps: YMapsApi) => void;
  setOrderAddressAC: (value: string) => void;
  setPointByInput: (ymaps: YMapsApi, address: string) => void;
}

const DisplayMapContainer = (props: IProps) => {
  const handlerLoad = (ymaps: YMapsApi) => {
    props.setYMapsAC(ymaps);
    const suggestView = new ymaps.SuggestView('from');
    suggestView.events.add("select", (e: any) => {
     props.setPointByInput(ymaps, e.get('item').value)
    })
  }

  const handleClick = (data: YMapsApi) => {
    const coords = data.get('coords');
    props.setPointOnMap(coords, props.ymaps);
  }

  return(
    <DisplayMap
      suitableCrewFound={props.suitableCrewFound}
      suitableCrew={props.suitableCrew}
      pointCoords={props.pointCoords}
      addressFound={props.addressFound}
      handleClick={handleClick}
      handlerLoad={handlerLoad}
    />
  )
}

const mapStateToProps = (state: ReducerType) => ({
  addresses: state.formData.order.addresses,
  pointCoords: state.pointData.point.coordinates,
  crews: state.crewsData.crews,
  suitableCrew: state.crewsData.suitableCrew,
  ymaps: state.formData.ymaps,
  addressFound: state.pointData.point.addressFound,
  suitableCrewFound: state.crewsData.suitableCrewFound
})

export default connect(mapStateToProps,
  {setPointOnMap,
    setYMapsAC,
    setOrderAddressAC,
    setPointByInput,
  })(DisplayMapContainer);

