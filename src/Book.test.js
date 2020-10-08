import React from "react"
import { render } from "@testing-library/react"
import Book from "./Book"

test("renders Book box", () => {
  const title = "Testing"
  const text = "Lorem Ipsum"

  const { container, getByText } = render(<Book header={title} content={text} className="Box Test" />)

  const book = container.firstChild
  expect(book).toBeInTheDocument()
  expect(book).toHaveClass("Book", "Box", "Test")

  const header = getByText(title)
  expect(header).toHaveClass("Header")

  const content = getByText(text)
  expect(content).toHaveClass("Content")

  const footer = getByText(/Janela Web/i)
  expect(footer).toHaveClass("Footer")
})
