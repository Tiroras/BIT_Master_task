import React from 'react';
import AllCrewsContainer from "./all-crews/AllCrews.container";
import classes from "./OrderDisplay.module.css";
import DisplayMapContainer from "./map/DisplayMap.container";


const OrderDisplay = () => {
  return(
    <div className={classes.order_display}>
      <DisplayMapContainer />
      <AllCrewsContainer />
    </div>
  )
}

export default OrderDisplay;