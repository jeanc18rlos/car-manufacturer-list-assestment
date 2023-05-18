import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Button, { ButtonVariant, ButtonSize } from "./"

describe("Button", () => {
  test("renders children", () => {
    const { getByText } = render(
      <Button variant={ButtonVariant.Primary} size={ButtonSize.Medium}>
        Click me
      </Button>
    )

    const button = getByText("Click me")
    expect(button).toBeInTheDocument()
  })

  test("responds to click events", () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button
        onClick={handleClick}
        variant={ButtonVariant.Primary}
        size={ButtonSize.Medium}
      >
        Click me
      </Button>
    )

    const button = getByText("Click me")
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test("does not respond to click events when disabled", () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button
        onClick={handleClick}
        disabled
        variant={ButtonVariant.Primary}
        size={ButtonSize.Medium}
      >
        Click me
      </Button>
    )

    const button = getByText("Click me")
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(0)
  })

  test("has correct classes for primary variant", () => {
    const { getByText } = render(
      <Button variant={ButtonVariant.Primary} size={ButtonSize.Medium}>
        Click me
      </Button>
    )

    const button = getByText("Click me")
    expect(button).toHaveClass("assestment-button", "primary", "medium")
  })

  // Similar tests for other variants and sizes...

  test("adds custom class name", () => {
    const { getByText } = render(
      <Button
        className="custom-class"
        variant={ButtonVariant.Primary}
        size={ButtonSize.Medium}
      >
        Click me
      </Button>
    )

    const button = getByText("Click me")
    expect(button).toHaveClass(
      "assestment-button",
      "primary",
      "medium",
      "custom-class"
    )
  })
})
