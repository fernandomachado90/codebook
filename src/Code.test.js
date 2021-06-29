import React from "react"
import { render } from "@testing-library/react"
import Code from "./Code"

const placeholder = {
  html: `<body></body>`,
  css: `body { };`,
  js: `//one-line comment for testing purposes`,
}
jest.mock("./code/placeholder", () => ({ placeholder }))

test("renders Code box", () => {
  const { container } = render(<Code className="Box Test" />)

  const code = container.firstChild
  expect(code).toBeInTheDocument()
  expect(code).toHaveClass("Code", "Box", "Test")
})

test("renders CodePen", () => {
  const { getByTitle } = render(<Code />)

  const codepen = getByTitle("codepen")
  expect(codepen).toBeInTheDocument()
  expect(codepen).toHaveAttribute("data-prefill", `{"title":""}`)
  expect(codepen).not.toHaveTextContent()
})

test("renders CodePen with title", () => {
  const title = "Hello, World!"

  const { getByTitle } = render(<Code title={title} />)

  const codepen = getByTitle("codepen")
  expect(codepen).toBeInTheDocument()
  expect(codepen).toHaveAttribute("data-prefill", `{"title":"${title}"}`)
  expect(codepen).not.toHaveTextContent()
})

test("renders CodePen with default placeholder prefill for html, css and js", () => {
  const { getByText } = render(<Code />)

  const html = getByText(placeholder.html)
  expect(html).toBeInTheDocument()
  expect(html).toHaveAttribute("data-lang", "html")

  const css = getByText(placeholder.css)
  expect(css).toBeInTheDocument()
  expect(css).toHaveAttribute("data-lang", "css")

  const js = getByText(placeholder.js)
  expect(js).toBeInTheDocument()
  expect(js).toHaveAttribute("data-lang", "js")
})

test("renders CodePen with custom provided prefill for html, css and js", () => {
  const custom = {
    html: `<div>welcome</div>`,
    css: `div {color: purple}`,
    js: `alert('hello')`,
  }

  const { getByText } = render(<Code {...custom} />)

  const html = getByText(custom.html)
  expect(html).toBeInTheDocument()
  expect(html).toHaveAttribute("data-lang", "html")

  const css = getByText(custom.css)
  expect(css).toBeInTheDocument()
  expect(css).toHaveAttribute("data-lang", "css")

  const js = getByText(custom.js)
  expect(js).toBeInTheDocument()
  expect(js).toHaveAttribute("data-lang", "js")
})
