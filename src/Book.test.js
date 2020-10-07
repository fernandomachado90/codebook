import React from "react"
import { render } from "@testing-library/react"
import Book from "./Book"

test("renders Book box", () => {
  const { getByText } = render(<Book className="Box Test" />)
  const book = getByText("book")
  expect(book).toBeInTheDocument()
  expect(book).toHaveClass("Book", "Box", "Test")
})
