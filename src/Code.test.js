import React from "react"
import { render } from "@testing-library/react"
import Code from "./Code"

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

test("renders CodePen with default prefill for html, css and js", () => {
  const prefill = {
    html: true,
    css: true,
    js: true,
  }

  const { getByText } = render(<Code {...prefill} />)

  const html = getByText((content) => content.startsWith("<body>"))
  expect(html).toBeInTheDocument()
  expect(html).toHaveAttribute("data-lang", "html")

  const css = getByText((content) => content.startsWith("body"))
  expect(css).toBeInTheDocument()
  expect(css).toHaveAttribute("data-lang", "css")

  const js = getByText((content) => content.startsWith("//"))
  expect(js).toBeInTheDocument()
  expect(js).toHaveAttribute("data-lang", "js")
})

test("renders CodePen with provided prefill for html, css and js", () => {
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
