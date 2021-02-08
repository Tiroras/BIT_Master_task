import React from 'react';
import Order from "./Order";
import {ReducerType} from "../../../redux/store";
import {connect} from "react-redux";


interface IProps {
  crewID: number;
}

const OrderContainer = (props: IProps) => {
  return(
    <Order
      crewID={props.crewID}
    />
  )
}

const mapStateToProps = (state: ReducerType) => ({
  crewID: state.formData.order.crew_id
})

export default connect(mapStateToProps)(OrderContainer);