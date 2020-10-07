import React from "react"
import { render } from "@testing-library/react"
import Code from "./Code"

test("renders Code box", () => {
  const { container } = render(<Code className="Box Test" />)

  const code = container.firstChild
  expect(code).toBeInTheDocument()
  expect(code).toHaveClass("Code", "Box", "Test")
})
