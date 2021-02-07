import {connect} from "react-redux";
import OrderForm from "./OrderForm";
import {setPointByInput} from "../../../redux/point-reducer";
import {YMapsApi} from "react-yandex-maps";
import {ICrew} from "../../../types/ICrews.type";
import {setOrderAddressAC} from "../../../redux/form-reducer";


interface IProps {
  address: string;
  ymaps: YMapsApi;
  crews: Array<ICrew>;
  isValid: boolean;
  setPointByInput: (ymaps: YMapsApi, address: string) => void;
  setOrderAddressAC: (value: string) => void;
}

const OrderFormContainer = (props: IProps) => {


  const handlerChange = (e: string) => {
    props.setPointByInput(props.ymaps, e);
  }

  return(
    <OrderForm
      address={props.address}
      isValid={props.isValid}
      handlerChange={handlerChange}
    />
  )
}

const mapStateToProps = (state: any) => ({
  address: state.formData.order.addresses.address,
  ymaps: state.formData.ymaps,
  crews: state.crewsData.crews,
  isValid: state.formData.isValid
})

export default connect(mapStateToProps, {setPointByInput, setOrderAddressAC})(OrderFormContainer);