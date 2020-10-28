import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

jest.mock("./Book", () => ({ props }) => <div>Book</div>)
jest.mock("./Code", () => ({ props }) => <div>Code</div>)

test("renders App", () => {
  const { container } = render(<App />)

  const app = container.firstChild
  expect(app).toBeInTheDocument()
  expect(app).toHaveClass("App")
})
