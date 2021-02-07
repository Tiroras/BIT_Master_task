import React from 'react';
import SuitableCrewListContainer from "./crew-list/SuitableCrewList.container";
import classes from "./SuitableCrew.module.css";


const SuitableCrew = () => {
  return(
    <div className={classes.suitable_crews}>
      <div className={classes.head}>
        Подходящий экипаж
      </div>
      <SuitableCrewListContainer />
    </div>
  )
}

export default SuitableCrew;