import React from 'react';
import classes from "./Map.module.css";
import {Map, Placemark, YMaps, YMapsApi} from "react-yandex-maps";
import {ICrew, TSuitableCrew} from "../../../../types/ICrews.type";


interface ICoords {
  lat: number;
  lon: number;
}

type IProps = {
  suitableCrew: TSuitableCrew;
  pointCoords: ICoords;
  addressFound: boolean;
  suitableCrewFound: boolean;
  handleClick: (data: React.MouseEvent<HTMLElement>) => void;
  handlerLoad: (value: YMapsApi) => void;
}

const DisplayMap = (props: IProps) => {
  return(
    <div className={classes.map}>
      <YMaps
        query={{
          apikey: "abdf0996-8810-439f-b42d-8919f7eafebf",
          load: "package.full"
        }}
        >
        <Map
          defaultState={{
            center: [56.85, 53.2],
            zoom: 13,
            controls: ['zoomControl']
          }}
          width={"100%"}
          height={"100%"}
          modules={ ['control.ZoomControl', "geocode", "SuggestView"] }
          onLoad={(ymaps: YMapsApi) => props.handlerLoad(ymaps)}
          onClick={(e: React.MouseEvent<HTMLElement>) => props.handleClick(e) }
        >
          {props.addressFound ?
            <Placemark
              geometry={[props.pointCoords.lat, props.pointCoords.lon]}
              options={{iconColor: "yellow"}}
            /> :
            <Placemark
              geometry={[props.pointCoords.lat, props.pointCoords.lon]}
              options={{iconColor: "red"}}
              properties={{balloonContent: "Адресс указан неверно"}}
            />
          }
          {props.suitableCrewFound &&
            <Placemark
              key={props.suitableCrew.crews[0].id}
              options={{iconColor: "green"}}
              geometry={[props.suitableCrew.crews[0].lat, props.suitableCrew.crews[0].lon]}
            />
          }
        </Map>
      </YMaps>
    </div>
  )
}

export default DisplayMap;