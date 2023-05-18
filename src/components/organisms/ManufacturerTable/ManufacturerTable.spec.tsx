import React from "react"
import { render } from "@testing-library/react"
import ManufacturerTable from "./ManufacturerTable"

jest.mock("gatsby", () => ({
  navigate: jest.fn(),
}))

describe("ManufacturerTable", () => {
  const mockGetManufacturers = jest.fn()

  const manufacturers = {
    manufacturers: [
      {
        id: 1,
        name: "Manufacturer 1",
        country: "Country 1",
      },
      {
        id: 2,
        name: "Manufacturer 2",
        country: "Country 2",
      },
    ],
    currentPage: 1,
  }

  const headers = ["ID", "Name", "Country", "Details"]

  beforeEach(() => {
    render(
      <ManufacturerTable
        manufacturers={manufacturers}
        headers={headers}
        getManufacturers={mockGetManufacturers}
      />
    )
  })

  it("calls getManufacturers on mount", () => {
    expect(mockGetManufacturers).toHaveBeenCalledWith(manufacturers.currentPage)
  })
})
