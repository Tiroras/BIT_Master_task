import React from 'react';
import AllCrews from "./AllCrews";
import {connect} from "react-redux";
import {ICrew} from "../../../../types/ICrews.type";


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

const mapStateToProps = (state: any) => ({
  data: state.crewsData.crews,
  suitableCrewFound: state.crewsData.suitableCrewFound
});

export default connect(mapStateToProps)(AllCrewsContainer);