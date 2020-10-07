import React from "react"
import { render } from "@testing-library/react"
import App from "./App"

test("renders App", () => {
  const { container } = render(<App />)

  const app = container.firstChild
  expect(app).toBeInTheDocument()
  expect(app).toHaveClass("App")
})
