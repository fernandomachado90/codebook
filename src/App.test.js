import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders app windows", () => {
  const { getByText, getByTitle } = render(<App />)
  expect(getByText("book")).toBeInTheDocument()
  expect(getByTitle("codepen")).toBeInTheDocument()
})
