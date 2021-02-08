import React from 'react';
import AllCrews from "./AllCrews";
import {connect} from "react-redux";
import {ReducerType} from "../../../../redux/store";
import {ICrew} from "../../../../types/ProjTypes.types";


interface IProps {
  data: Array<ICrew>;
  suitableCrewFound: boolean
}

const AllCrewsContainer = (props: IProps) => {
  return(
    <AllCrews
      data={props.data}
      suitableCrewFound={props.suitableCrewFound}
    />
  )
}

const mapStateToProps = (state: ReducerType) => ({
  data: state.crewsData.crews,
  suitableCrewFound: state.crewsData.suitableCrewFound
});

export default connect(mapStateToProps)(AllCrewsContainer);