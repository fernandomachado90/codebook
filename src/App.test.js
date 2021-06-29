import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

jest.mock("./Book", () => ({ className }) => <div className={className}>Book</div>)
jest.mock("./Code", () => ({ className }) => <div className={className}>Code</div>)

test("renders App", () => {
  const { container, getByText } = render(<App />)

  const app = container.firstChild
  expect(app).toBeInTheDocument()

  const book = getByText(/Book/i)
  expect(book).toHaveClass("Box Single")

  const code = getByText(/Code/i)
  expect(code).toHaveClass("Box Double")
})
