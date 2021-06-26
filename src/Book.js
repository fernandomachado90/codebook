import React, { useEffect, useState } from "react"
import "./Book.css"
import "./BookContent.css"
import { fetchBookPages, selectRandomTheme } from "./BookAPI"

const theme = selectRandomTheme()
const book = fetchBookPages()
const pages = book.length - 1

function Book({ className }) {
  const [content, setContent] = useState()
  const [page, setPage] = useState(0)
  const handlePrevPage = () => {
    if (0 < page) setPage(page - 1)
  }
  const handleNextPage = () => {
    if (page < pages) setPage(page + 1)
  }

  useEffect(() => {
    import(`${book[page]}`).then(setContent).catch(console.error)
  }, [page])

  return (
    <div className={`Book ${className ? className : ""}`}>
      <nav className="Header">
        <img alt="CodeBook" title="CodeBook" src={`${process.env.PUBLIC_URL}/android-icon-36x36.png`} />
        <div className="Title">{content?.title}</div>
        <div className="Navigation">
          <button onClick={handlePrevPage}>{"<"}</button>
          <span>
            {page}/{pages}
          </span>
          <button onClick={handleNextPage}>{">"}</button>
        </div>
      </nav>
      <div className={`Content Theme-${theme}`}>{content?.body}</div>
      <Footer />
    </div>
  )
}

function Footer() {
  const [seconds, setSeconds] = useState(0)
  const formatTimestamp = (seconds) => new Date(seconds * 1000).toISOString().substr(11, 8)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const year = new Date().getFullYear()
  return (
    <footer className="Footer">
      © CodeBook
      <br />
      2020—{year}
      <span>{formatTimestamp(seconds)}</span>
      <a className="Link" href={process.env.REACT_APP_CONTRIBUTING_URL} target="_blank" rel="noopener noreferrer">
        <img alt="GitHub" src={`${process.env.PUBLIC_URL}/github.png`} />
        Colabore
      </a>
    </footer>
  )
}

export default Book
