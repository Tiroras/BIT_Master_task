import React from 'react';
import {connect} from "react-redux";
import Content from "./Content";
import {API} from "../../api/api";
import {ReducerType} from "../../redux/store";


interface IAddresses {
  address: string;
  lon: number;
  lat: number;
}

interface IOrder {
  crew_id: number;
  order_id: number;
  addresses: IAddresses;
}

interface IProps {
  order: IOrder
}

const ContentContainer = (props: IProps) => {
  const handlerSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if(!(props.order.crew_id === 0)){
      const time = new Date()

      API.postOrder({
        orderID: props.order.order_id,
        descr: "OK",
        time: `${time.getFullYear()}.${time.getMonth()}.${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
      });
    }
  }

  return(
    <Content
      handlerSubmit={handlerSubmit}
    />
  )
}

const mapStateToProps = (state: ReducerType) => ({
  order: state.formData.order
})

export default connect(mapStateToProps)(ContentContainer);