import {
  fetchManufacturerDetails,
  fetchManufacturers,
  fetchModelsByManufacturer,
} from "../httpClient/manufacturers"
import Manufacturer from "@/interfaces/Manufacturer"
import Model from "@/interfaces/Model"

export const getManufacturers = async (
  page: number
): Promise<Manufacturer[]> => {
  const { Results } = await fetchManufacturers(page + 1).toPromise()
  return Results
}

export const getManufacturerDetails = async (
  manufacturerId: number
): Promise<Manufacturer[]> => {
  const { Results } = await fetchManufacturerDetails(manufacturerId).toPromise()
  return Results
}

export const getModelsByManufacturer = async (
  manufacturerId: number
): Promise<Model[]> => {
  const { Results } = await fetchModelsByManufacturer(
    manufacturerId
  ).toPromise()
  return Results
}
