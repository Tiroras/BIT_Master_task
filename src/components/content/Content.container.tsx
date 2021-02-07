import React from 'react';
import {connect} from "react-redux";
import Content from "./Content";


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
    console.log(props.order);
  }

  return(
    <Content
      handlerSubmit={handlerSubmit}
    />
  )
}

const mapStateToProps = (state: any) => ({
  order: state.formData.order
})

export default connect(mapStateToProps)(ContentContainer);