import Manufacturer from "./Manufacturer"
import Model from "./Model"

export default interface ManufacturerState {
  manufacturers: Manufacturer[]
  selectedManufacturer: Manufacturer | null
  modelsBySelectedManufacturer: Model[]
  currentPage: number
  error?: any
}
