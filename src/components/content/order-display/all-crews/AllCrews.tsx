import React from 'react';
import classes from "./AllCrews.module.css";
import {ICrew} from "../../../../types/ICrews.type";
import CrewContainer from "./Crew.container";


interface IProps {
  data: Array<ICrew>;
  suitableCrewFound: boolean;
}

const AllCrews = (props: IProps) => {
  return(
    <div className={classes.all_crews}>
      <div className={classes.head}>
        Все экипажи
      </div>
      <div className={classes.crew_list}>
        {props.suitableCrewFound && props.data.map((prop: ICrew) => (
          <CrewContainer
            key={prop.id}
            id={prop.id}
            car_mark={prop.car_mark}
            car_model={prop.car_model}
            car_color={prop.car_color}
            distance={prop.distance}
          />
        ))}
      </div>
    </div>
  )
}

export default AllCrews;