import React from 'react';
import OrderFormContainer from "./order-form/OrderForm.container";
import SuitableCrew from "./suitable-crew/SuitableCrew";
import OrderDisplay from "./order-display/OrderDisplay";
import Order from "./button/Order";


interface IProps {
  handlerSubmit: (e: React.FormEvent<HTMLElement>) => void;
}

const Content = (props: IProps) => {
  return(
    <main>
      <form onSubmit={e => props.handlerSubmit(e)}>
        <OrderFormContainer />
        <SuitableCrew />
        <OrderDisplay />
        <Order />
      </form>
    </main>
  )
}

export default Content;