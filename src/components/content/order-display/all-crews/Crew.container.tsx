import {connect} from "react-redux";
import {setOrderCrewIDAC} from "../../../../redux/form-reducer";
import Crew from "./Crew";


interface IProps {
  id: number;
  orderCrewID: number;
  car_mark: string;
  car_model: string;
  car_color: string;
  distance: number;
  setOrderCrewIDAC: (id: number) => void;
}

const CrewContainer = (props: IProps) => {
  return(
    <Crew
      id={props.id}
      orderCrewID={props.orderCrewID}
      car_mark={props.car_mark}
      car_model={props.car_model}
      car_color={props.car_color}
      distance={props.distance}
      setOrderCrewID={props.setOrderCrewIDAC}
    />
  )
}

const mapStateToProps = (state: any) => ({
  orderCrewID: state.formData.order.crew_id
})

export default connect(mapStateToProps, {setOrderCrewIDAC})(CrewContainer);