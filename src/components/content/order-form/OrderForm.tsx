import React from 'react';
import classes from './OrderForm.module.css';


interface IProps {
  address: string;
  isValid: boolean;
  handlerChange: (e: string) => void;
}

const OrderForm = (props: IProps) => {
  return (
    <div>
      <div className={props.isValid ? `${classes.valid} ${classes.input}` : `${classes.not_valid} ${classes.input}`}>
        <input
          placeholder="Откуда"
          value={props.address}
          name="from"
          id="from"
          onChange={e => props.handlerChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default OrderForm;