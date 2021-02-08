import {ICrew, TSuitableCrew} from "../types/ProjTypes.types";


type TState = {
  crews: Array<ICrew>;
  suitableCrew: TSuitableCrew;
  suitableCrewFound: boolean
}

type ActionsType = ReturnType<typeof setSuitableCrewAC> |
  ReturnType<typeof setDistanceAC> |
  ReturnType<typeof setSCTimeAC> |
  ReturnType<typeof sortCrewsAC> |
  ReturnType<typeof setCrewFound> |
  ReturnType<typeof setCrewsAC>

const initialState: TState = {
  crews: [],
  suitableCrew: {
    code: 0,
    crews: [],
    time: ""
  },
  suitableCrewFound: false
}

const crewReducer = (state: TState = initialState, action: ActionsType) => {
  switch (action.type) {
    case "SET-CREWS": {
      return {...state, crews: action.crews}
    }
    case "SET-SUITABLE-CREW": {
      return {...state, suitableCrew: {...state.suitableCrew, crews: action.crews} }
    }
    case "SET-DISTANCE": {
      return {...state, crews: state.crews.map(crew => {
        if(crew.id === action.id) {
          return {...crew, distance: action.distance}
        }
        return crew;
      })}
    }
    case "SET-SC-TIME": {
      return {...state, suitableCrew: {...state.suitableCrew, time: action.time}}
    }
    case "SORT-CREWS": {
      return {...state, crews: state.crews.sort((a, b) => a.distance > b.distance ? 1 : -1)}
    }
    case "SET-CREW-FOUND": {
      return {...state, suitableCrewFound: action.value}
    }
    default: return state;
  }
}

export default crewReducer;

export const setCrewsAC = (crews: Array<ICrew>) => ({type: "SET-CREWS", crews} as const);
export const setSuitableCrewAC = (crews: Array<ICrew>) => ({type: "SET-SUITABLE-CREW", crews} as const);
export const setDistanceAC = (id: number, distance: number) => ({type: "SET-DISTANCE", id, distance} as const)
export const setSCTimeAC = (time: string) => ({type: "SET-SC-TIME", time} as const);
export const sortCrewsAC = () => ({type: "SORT-CREWS"} as const);
export const setCrewFound = (value: boolean) => ({type: "SET-CREW-FOUND", value} as const);