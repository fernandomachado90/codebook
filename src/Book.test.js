import React from "react"
import { render, act } from "@testing-library/react"
import Book from "./Book"

jest.mock("./BookAPI", () => {
  return {
    fetchBookPages: () => ["./book/0.js", "./book/1.js"],
    selectRandomTheme: () => "Test",
  }
})

jest.mock("./book/0.js", () => {
  return {
    title: "title zero",
    body: <>body zero</>,
  }
})

jest.mock("./book/1.js", () => {
  return {
    title: "title one",
    body: <>body one</>,
  }
})

test("renders Book box", async () => {
  const { container, getByText, findByText } = render(<Book className="Box Test" />)

  const header = await findByText(/title zero/i)
  expect(header.parentElement).toHaveClass("Header")

  const content = await findByText(/body zero/i)
  expect(content).toHaveClass("Content", "Theme-Test")

  const footer = getByText(/2020/i)
  expect(footer).toHaveClass("Footer")

  const book = container.firstChild
  expect(book).toBeInTheDocument()
  expect(book).toHaveClass("Book", "Box", "Test")
})

test("Book pages navigation buttons", async () => {
  const { findByText } = render(<Book className="Box Test" />)

  const next = await findByText(">")
  await act(async () => {
    next.click()
  })
  expect(await findByText(/title one/i)).toBeInTheDocument()
  expect(await findByText(/body one/i)).toBeInTheDocument()

  const nextAgain = await findByText(">")
  await act(async () => {
    nextAgain.click()
  })
  expect(await findByText(/title one/i)).toBeInTheDocument()
  expect(await findByText(/body one/i)).toBeInTheDocument()

  const previous = await findByText("<")
  await act(async () => {
    previous.click()
  })
  expect(await findByText(/title zero/i)).toBeInTheDocument()
  expect(await findByText(/body zero/i)).toBeInTheDocument()

  const previousAgain = await findByText("<")
  await act(async () => {
    previousAgain.click()
  })
  expect(await findByText(/title zero/i)).toBeInTheDocument()
  expect(await findByText(/body zero/i)).toBeInTheDocument()
})
