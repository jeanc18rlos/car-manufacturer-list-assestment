import { useDispatch, useSelector } from "react-redux"
import {
  getManufacturers as getManufacturersAction,
  getModelsByManufacturer,
  setSelectedManufacturer as setSelectedManufacturerAction,
  getManufacturerDetails as getManufacturerDetailsAction,
} from "@/store/actions/manufacturersActions"

import ManufacturerState from "@/interfaces/ManufacturerState"
import Manufacturer from "@/interfaces/Manufacturer"

export const useManufacturers = () => {
  // get state from redux
  const manufacturers = useSelector(
    (state: { manufacturers: ManufacturerState }) => state.manufacturers
  )
  // get dispatch from redux
  const dispatch = useDispatch()

  // dispatch get manufacturers action
  const getManufacturers = (pageid?: number) => {
    dispatch(getManufacturersAction(pageid || 0))
  }

  // dispatch get models action
  const getModels = (manufacturerId: number) => {
    dispatch(getModelsByManufacturer(manufacturerId))
  }

  // dispatch get manufacturer details action
  const getManufacturerDetails = (manufacturerId: number) => {
    dispatch(getManufacturerDetailsAction(manufacturerId))
  }

  // dispatch set selected manufacturer action
  const setSelectedManufacturer = (manufacturer: Manufacturer) => {
    dispatch(setSelectedManufacturerAction(manufacturer))
  }

  // return state and dispatch
  return {
    manufacturers,
    getManufacturers,
    getModels,
    setSelectedManufacturer,
    getManufacturerDetails,
  }
}
