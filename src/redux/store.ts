import {applyMiddleware, combineReducers, createStore } from "redux"
import crewReducer from "./crew-reducer";
import thunkMiddleware from "redux-thunk";
import formReducer from "./form-reducer";
import pointReducer from "./point-reducer";


const reducer = combineReducers({
  crewsData: crewReducer,
  formData: formReducer,
  pointData: pointReducer
})

export type ReducerType = ReturnType<typeof reducer>

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;