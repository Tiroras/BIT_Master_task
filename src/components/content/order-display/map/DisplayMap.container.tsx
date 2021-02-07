import React from 'react';
import DisplayMap from "./DisplayMap";
import {connect} from "react-redux";
import {ICrew, TSuitableCrew} from "../../../../types/ICrews.type";
import {setOrderAddressAC, setYMapsAC} from "../../../../redux/form-reducer";
import {YMapsApi} from "react-yandex-maps";
import {setPointByInput, setPointBySelect, setPointOnMap} from "../../../../redux/point-reducer";


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
  setPointBySelect: (ymaps: YMapsApi, address: string) => void;
}

const DisplayMapContainer = (props: IProps) => {
  const handlerLoad = (ymaps: YMapsApi) => {
    props.setYMapsAC(ymaps);
    const suggestView = new ymaps.SuggestView('from');
    suggestView.events.add("select", (e: any) => {
     props.setPointBySelect(ymaps, e.get('item').value)
    })
  }

  const handleClick = (data: YMapsApi) => {
    const coords = data.get('coords');
    console.log(props.addressFound)
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

const mapStateToProps = (state: any) => ({
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
    setPointBySelect
  })(DisplayMapContainer);

