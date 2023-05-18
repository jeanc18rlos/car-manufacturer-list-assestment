import ManufacturerState from "@/interfaces/ManufacturerState"
import { GET_MANUFACTURERS_FAILED, GET_MODELS_FAILED, SET_MANUFACTURERS, SET_MODELS, SET_SELECTED_MANUFACTURER } from "../actions/manufacturersActions"

const initialState: ManufacturerState = {
  manufacturers: [],
  modelsBySelectedManufacturer: [],
  selectedManufacturer: null,
  currentPage: 0,
  error: null,

}

const manuFacturersReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case SET_MANUFACTURERS: {
      return {
        ...state,
        manufacturers: [
          ...state.manufacturers,
          ...action.payload.manufacturers,
        ],
        currentPage: state.currentPage + 1,
        error: null,
      }
    }
    case SET_SELECTED_MANUFACTURER:
      return {
        ...state,
        selectedManufacturer: action.payload.selectedManufacturer,
      }
    case SET_MODELS:
      return {
        ...state,
        modelsBySelectedManufacturer: action.payload.models,
      }
    case GET_MANUFACTURERS_FAILED:
    case GET_MODELS_FAILED:
      return {
        ...state,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export default manuFacturersReducer
