import React from 'react';
import SuitableCrewItem from "./SuitableCrewItem";
import {connect} from "react-redux";
import {setOrderCrewIDAC} from "../../../../redux/form-reducer";


interface IProps {
  id: number;
  orderCrewID: number;
  car_mark: string;
  car_model: string;
  car_color: string;
  car_number: string;
  setOrderCrewIDAC: (id: number) => void;
}

const SuitableCrewItemContainer = (props: IProps) => {
  return(
    <SuitableCrewItem
      setOrderCrewID={props.setOrderCrewIDAC}
      id={props.id}
      orderCrewID={props.orderCrewID}
      car_mark={props.car_mark}
      car_model={props.car_model}
      car_color={props.car_color}
      car_number={props.car_number}
    />
  )
}

const mapStateToProps = (state: any) => ({
  orderCrewID: state.formData.order.crew_id
})

export default connect(mapStateToProps, {setOrderCrewIDAC})(SuitableCrewItemContainer);