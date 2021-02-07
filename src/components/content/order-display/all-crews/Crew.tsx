import React from 'react';
import classes from '../../Crew.module.css';
import carImage from '../../../../images/car.png';

interface IProps {
  id: number;
  orderCrewID: number;
  car_mark: string;
  car_model: string;
  car_color: string;
  distance: number;
  setOrderCrewID: (id: number) => void;
}

const Crew = (props: IProps) => {
  return(
    <div className={props.id === props.orderCrewID ?
      `${classes.crew} ${classes.crew_selected}` :
      `${classes.crew} ${classes.crew_not_selected}` }
      onClick={e => props.setOrderCrewID(props.id)}>
      <div className={classes.img}>
        <img src={carImage}  alt={"icon"}/>
      </div>
      <div className={classes.crew_information}>
        <div className={classes.car_information}>
          <div>
            {`${props.car_mark} ${props.car_model}`}
          </div>
          <div>
            {props.car_color}
          </div>
        </div>
        <div className={classes.distance}>
          {`${props.distance} м.`}
        </div>
      </div>
    </div>
  )
}

export default Crew;