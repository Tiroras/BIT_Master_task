import React from 'react';
import {connect} from "react-redux";
import SuitableCrewList from "./SuitableCrewList";


const mapStateToProps = (state: any) => ({
  data: state.crewsData.suitableCrew.crews
})

export default connect(mapStateToProps)(SuitableCrewList)