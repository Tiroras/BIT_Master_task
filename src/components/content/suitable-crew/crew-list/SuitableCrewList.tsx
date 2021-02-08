import React from 'react';
import classes from "./SuitableCrewList.module.css";
import SuitableCrewItemContainer from "./SuitableCrewItem.container";
import {ICrew} from "../../../../types/ProjTypes.types";


interface IProps {
  data: Array<ICrew>
}

const SuitableCrewList = (props: IProps) => {
  return(
    <div className={classes.list}>
      {props.data.map((crew: ICrew) => (
        <SuitableCrewItemContainer
          key={crew.id}
          id={crew.id}
          car_mark={crew.car_mark}
          car_model={crew.car_model}
          car_color={crew.car_color}
          car_number={crew.car_number}
        />
      ))}
    </div>
  )
}

export default SuitableCrewList;