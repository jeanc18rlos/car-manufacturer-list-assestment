import React from "react"
import { render, screen } from "@testing-library/react"
import Layout from "./Layout"

describe("Layout", () => {
  it("renders its children", () => {
    render(
      <Layout>
        <div data-testid="child-component">Test Child</div>
      </Layout>
    )

    expect(screen.getByTestId("child-component")).toBeInTheDocument()
    expect(screen.getByText("Test Child")).toBeInTheDocument()
  })
})
