import Manufacturer from "@/interfaces/Manufacturer"

export const SET_MANUFACTURERS = "SET_MANUFACTURERS"
export const SET_SELECTED_MANUFACTURER = "SET_SELECTED_MANUFACTURER"
export const SET_MODELS = "SET_MODELS"

export const GET_MANUFACTURERS = "GET_MANUFACTURERS"
export const GET_MANUFACTURER = "GET_MANUFACTURER"
export const GET_MODELS_BY_MANUFACTURER = "GET_MODELS_BY_MANUFACTURER"

export const GET_MANUFACTURERS_FAILED = "GET_MANUFACTURERS_FAILED"
export const GET_MODELS_FAILED = "GET_MODELS_FAILED"


export const getManufacturers = (currentPage: number) => ({
  type: GET_MANUFACTURERS,
  payload: {
    currentPage,
  },
})

export const getManufacturerDetails = (manufacturerId: number) => ({
  type: GET_MANUFACTURER,
  payload: {
    manufacturerId,
  },
})
export const getModelsByManufacturer = (manufacturerId: number) => ({
  type: GET_MODELS_BY_MANUFACTURER,
  payload: {
    manufacturerId,
  },
})

export const setManufacturers = (manufacturers: Manufacturer[]) => ({
  type: SET_MANUFACTURERS,
  payload: {
    manufacturers,
  },
})

export const setSelectedManufacturer = (
  selectedManufacturer: Manufacturer
) => ({
  type: SET_SELECTED_MANUFACTURER,
  payload: {
    selectedManufacturer,
  },
})


export const setModels = (models: any) => ({
  type: SET_MODELS,
  payload: {
    models,
  },
})

export const getManufacturersFailed = (error: any) => ({
  type: GET_MANUFACTURERS_FAILED,
  payload: {
    error,
  },
})

export const getModelsFailed = (error: any) => ({
  type: GET_MODELS_FAILED,
  payload: {
    error,
  },
})
