import React from "react"
import { render, act } from "@testing-library/react"
import Book from "./Book"

jest.mock("./BookAPI", () => ({
  fetchBookPages: () => ["./testbook/00-start", "./testbook/99-end"],
  selectRandomTheme: () => "Test",
}))

jest.mock(
  "./testbook/00-start",
  () => ({
    title: "hello",
    body: <>this is a test</>,
  }),
  { virtual: true }
)

jest.mock(
  "./testbook/99-end",
  () => ({
    title: "goodbye",
    body: <>hope all went well</>,
  }),
  { virtual: true }
)

test("renders Book box", async () => {
  const { container, getByText, findByText } = render(<Book className="Box Test" />)

  const header = await findByText(/hello/i)
  expect(header.parentElement).toHaveClass("Header")

  const content = await findByText(/this is a test/i)
  expect(content).toHaveClass("Content", "Theme-Test")

  const footer = getByText(/2020—\d{4}/i)
  expect(footer).toHaveClass("Footer")

  const book = container.firstChild
  expect(book).toBeInTheDocument()
  expect(book).toHaveClass("Book", "Box", "Test")
})

test("activates Book pages navigation buttons", async () => {
  const { findByText } = render(<Book className="Box Test" />)

  expect(await findByText(/hello/i)).toBeInTheDocument()
  expect(await findByText(/this is a test/i)).toBeInTheDocument()

  const next = await findByText(">")
  await act(async () => {
    next.click()
  })
  expect(await findByText(/goodbye/i)).toBeInTheDocument()
  expect(await findByText(/hope all went well/i)).toBeInTheDocument()

  const nextAgain = await findByText(">")
  await act(async () => {
    nextAgain.click()
  })
  expect(await findByText(/goodbye/i)).toBeInTheDocument()
  expect(await findByText(/hope all went well/i)).toBeInTheDocument()

  const previous = await findByText("<")
  await act(async () => {
    previous.click()
  })
  expect(await findByText(/hello/i)).toBeInTheDocument()
  expect(await findByText(/this is a test/i)).toBeInTheDocument()

  const previousAgain = await findByText("<")
  await act(async () => {
    previousAgain.click()
  })
  expect(await findByText(/hello/i)).toBeInTheDocument()
  expect(await findByText(/this is a test/i)).toBeInTheDocument()
})
