import { AxiosHttpClient } from "../axiosHttpClient"
import { HttpClient } from "../httpClient"
import { Observable } from "rxjs"

import Manufacturer from "@/interfaces/Manufacturer"
import Model from "@/interfaces/Model"

const BASE_URL = "https://vpic.nhtsa.dot.gov/api"

const httpClient: HttpClient = new AxiosHttpClient(BASE_URL)

interface FetchManufacturersResponse {
  Count: number
  Message: string
  SearchCriteria?: string
  Results: Manufacturer[]
}

interface FetchManufacturerDetailsResponse {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Manufacturer[]
}
interface FetchModelsByManufacturerResponse {
  Count: number
  Message: string
  SearchCriteria: string
  Results: Model[]
}

export const fetchManufacturerDetails = (
  manufacturerId: number
): Observable<FetchManufacturerDetailsResponse> => {
  return httpClient.get(`/vehicles/GetManufacturerDetails/${manufacturerId}?format=json`)
}

export const fetchManufacturers = (
  page: number
): Observable<FetchManufacturersResponse> => {
  return httpClient.get(`vehicles/getallmanufacturers?format=json&page=${page}`)
}

export const fetchModelsByManufacturer = (
  manufacturerId: number
): Observable<FetchModelsByManufacturerResponse> => {
  return httpClient.get(`/vehicles/GetMakeForManufacturer/${manufacturerId}?format=json`)
}
