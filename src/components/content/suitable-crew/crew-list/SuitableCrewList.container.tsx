import React from 'react';
import {connect} from "react-redux";
import SuitableCrewList from "./SuitableCrewList";
import {ReducerType} from "../../../../redux/store";


const mapStateToProps = (state: ReducerType) => ({
  data: state.crewsData.suitableCrew.crews
})

export default connect(mapStateToProps)(SuitableCrewList)