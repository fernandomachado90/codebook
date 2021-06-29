import React from "react"
import { render } from "@testing-library/react"
import Book from "./Book"

jest.mock("./BookAPI", () => ({
  fetchBookPages: () => ["./book/00-start", "./book/50-middle", "./book/99-end"],
  selectRandomTheme: () => "Test",
}))

jest.mock(
  "./book/00-start",
  () => ({
    title: "hello",
    body: <>this is a test</>,
  }),
  { virtual: true }
)

jest.mock(
  "./book/50-middle",
  () => ({
    title: "hey",
    body: <>halfway there</>,
  }),
  { virtual: true }
)

jest.mock(
  "./book/99-end",
  () => ({
    title: "goodbye",
    body: <>hope all went well</>,
  }),
  { virtual: true }
)

jest.mock("react-router-dom", () => ({
  Link: ({ className, to, children }) => (
    <a className={className} href={to}>
      {children}
    </a>
  ),
}))

test("renders Book box", async () => {
  const { container, getByText, findByText } = render(<Book className="Box Test" />)

  const header = await findByText(/hello/i)
  expect(header.parentElement).toHaveClass("Header")

  const content = await findByText(/this is a test/i)
  expect(content).toHaveClass("Content", "Theme-Test")

  const footer = getByText(/2020—\d{4}/i)
  expect(footer).toHaveClass("Footer")

  const timestamp = getByText(/00:00:\d{2}/i)
  expect(timestamp).toBeInTheDocument()

  const book = container.firstChild
  expect(book).toBeInTheDocument()
  expect(book).toHaveClass("Book", "Box", "Test")
})

test("render Book pages navigation buttons (start)", async () => {
  const { findByText } = render(<Book page="0" />)

  expect(await findByText(/hello/i)).toBeInTheDocument()
  expect(await findByText(/this is a test/i)).toBeInTheDocument()

  const previous = await findByText("<")
  expect(previous.href).toBe(`${global.window.location.href}0`)

  const next = await findByText(">")
  expect(next.href).toBe(`${global.window.location.href}1`)
})

test("render Book pages navigation buttons (middle)", async () => {
  const { findByText } = render(<Book page="1" />)

  expect(await findByText(/hey/i)).toBeInTheDocument()
  expect(await findByText(/halfway there/i)).toBeInTheDocument()

  const previous = await findByText("<")
  expect(previous.href).toBe(`${global.window.location.href}0`)

  const next = await findByText(">")
  expect(next.href).toBe(`${global.window.location.href}2`)
})

test("render Book pages navigation buttons (end)", async () => {
  const { findByText } = render(<Book page="2" />)

  expect(await findByText(/goodbye/i)).toBeInTheDocument()
  expect(await findByText(/hope all went well/i)).toBeInTheDocument()

  const previous = await findByText("<")
  expect(previous.href).toBe(`${global.window.location.href}1`)

  const next = await findByText(">")
  expect(next.href).toBe(`${global.window.location.href}2`)
})
