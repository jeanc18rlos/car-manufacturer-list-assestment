import React from "react"
import { render, screen } from "@testing-library/react"
import ManufacturerCard from "./ManufacturerCard"

describe("ManufacturerCard", () => {
  it("renders with selectedManufacturer and modelsBySelectedManufacturer", () => {
    const selectedManufacturer = {
      id: 1,
      name: "Test Manufacturer",
      country: "Test Country",
    }

    const modelsBySelectedManufacturer = [
      { id: 1, name: "Model 1" },
      { id: 2, name: "Model 2" },
    ]

    render(
      <ManufacturerCard
        selectedManufacturer={selectedManufacturer}
        modelsBySelectedManufacturer={modelsBySelectedManufacturer}
      />
    )

    expect(screen.getByText("id")).toBeInTheDocument()
    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("country")).toBeInTheDocument()
    expect(screen.getByText("Test Country")).toBeInTheDocument()

    expect(screen.getByText("models")).toBeInTheDocument()
    expect(screen.getByText("Model 1")).toBeInTheDocument()
    expect(screen.getByText("Model 2")).toBeInTheDocument()
  })

  it("renders without modelsBySelectedManufacturer", () => {
    const selectedManufacturer = {
      id: 1,
      name: "Test Manufacturer",
      country: "Test Country",
    }

    render(
      <ManufacturerCard
        selectedManufacturer={selectedManufacturer}
        modelsBySelectedManufacturer={[]}
      />
    )

    expect(screen.getByText("id")).toBeInTheDocument()
    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("country")).toBeInTheDocument()
    expect(screen.getByText("Test Country")).toBeInTheDocument()

    expect(screen.getByText("models")).toBeInTheDocument()
    expect(screen.queryByText("Model 1")).toBeNull()
    expect(screen.queryByText("Model 2")).toBeNull()
  })
})
