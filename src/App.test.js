import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders app windows", () => {
  const { getByTitle } = render(<App />)
  expect(getByTitle("codepen")).toBeInTheDocument()
})
