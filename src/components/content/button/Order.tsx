import React from 'react';
import classes from "../Order.module.css";


interface IProps {
  crewID: number;
}

const Order = (props: IProps) => {
  return(
    <div className={classes.order}>
      {!(props.crewID === 0) ?
        <button type={"submit"}>Заказать</button> :
        <button>Выберите машину</button>
      }
    </div>
  )
}

export default Order;