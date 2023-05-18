import { from, of } from "rxjs"
import { combineEpics, ofType } from "redux-observable"
import { map, catchError, switchMap } from "rxjs/operators"
import {
  getManufacturers,
  getModelsByManufacturer,
  getManufacturerDetails,
} from "@/services/manufacturers"
import {
  GET_MANUFACTURER,
  GET_MANUFACTURERS,
  GET_MODELS_BY_MANUFACTURER,
  setManufacturers,
  setSelectedManufacturer,
} from "../actions/manufacturersActions"

export const getManufacturersEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_MANUFACTURERS),
    // before anything set page as payload.page
    switchMap((action: any) =>
      from(getManufacturers(action.payload.currentPage))
    ),
    // convert them from
    map((manufacturers: any) => {
      const result = manufacturers.map((manufacturer: any) => ({
        id: manufacturer.Mfr_ID,
        name: manufacturer.Mfr_Name,
        country: manufacturer.Country,
      }))
      return setManufacturers(result)
    }),
    catchError(
      (error: any) => of({ type: "GET_MANUFACTURERS_FAILED", payload: { error } })
    ),
  )

export const getManufacturerDetailsEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_MANUFACTURER),

    switchMap((action: any) =>
      from(getManufacturerDetails(action.payload.manufacturerId)).pipe(
        map((manufacturers: any) => {
          const result = manufacturers.map((manufacturer: any) => ({
            id: manufacturer.Mfr_ID,
            name: manufacturer.Mfr_Name,
            country: manufacturer.Country,
          }))
          return setSelectedManufacturer(result[0])
        })
      )
    ),
    catchError(
      (error: any) => of({ type: "GET_MANUFACTURERS_FAILED", payload: { error } })
    ),
  )

export const getModelsByManufacturerEpic = (action$: any) =>
  action$.pipe(
    ofType(GET_MODELS_BY_MANUFACTURER),
    // first set selected manufacturer

    // then get models and return {manufacturerId, models}
    switchMap((action: any) => {
      const res = getModelsByManufacturer(action.payload.manufacturerId)
      return from(res)
    }),
    map((models: any) => {
      const result = models.map((model: any) => ({
        id: model.Make_ID,
        name: model.Make_Name,
      }))

      return { models: result }
    }),
    map(({ models }: any) => ({
      type: "SET_MODELS",
      payload: { models },
    })),
    catchError((error: any) =>
      of({ type: "GET_MODELS_FAILED", payload: { error } })
    )
  )

export default combineEpics(getManufacturersEpic, getModelsByManufacturerEpic, getManufacturerDetailsEpic)
