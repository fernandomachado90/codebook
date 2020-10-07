import React from "react"
import { render } from "@testing-library/react"
import Code from "./Code"

test("renders Code box", () => {
  const { container, debug } = render(<Code className="Box Test" />)

  const code = container.firstChild
  expect(code).toBeInTheDocument()
  expect(code).toHaveClass("Code", "Box", "Test")
  debug()
})

test("renders Code box with prefill", () => {
  const prefill = {
    html: `<div>welcome</div>`,
    css: `div {color: purple}`,
    js: `alert('hello')`,
  }

  const { getByText } = render(<Code {...prefill} />)

  const html = getByText(prefill.html)
  expect(html).toBeInTheDocument()
  expect(html).toHaveAttribute("data-lang", "html")

  const css = getByText(prefill.css)
  expect(css).toBeInTheDocument()
  expect(css).toHaveAttribute("data-lang", "css")

  const js = getByText(prefill.js)
  expect(js).toBeInTheDocument()
  expect(js).toHaveAttribute("data-lang", "js")
})
