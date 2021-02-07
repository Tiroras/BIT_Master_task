import React from 'react';
import classes from "../../Crew.module.css";
import carImage from '../../../../images/car.png';


interface IProps {
  id: number;
  orderCrewID: number;
  car_mark: string;
  car_model: string;
  car_color: string;
  car_number: string;
  setOrderCrewID: (id: number) => void;
}

const SuitableCrewItem = (props: IProps) => {
  return (
    <div className={props.id === props.orderCrewID ?
      `${classes.crew} ${classes.crew_selected}` :
      `${classes.crew} ${classes.crew_not_selected}` }
         onClick={e => props.setOrderCrewID(props.id)}>
      <div className={classes.img}>
        <img src={carImage} />
      </div>
      <div className={classes.car_information}>
        <div>
          {`${props.car_mark} ${props.car_model}`}
        </div>
        <div>
          {props.car_color}
        </div>
        <div>
          {props.car_number}
        </div>
      </div>
    </div>
  )
}

export default SuitableCrewItem;