import React, { useEffect, useState } from "react"
import "./Book.css"
import "./BookContent.css"
import { fetchBookPages, selectRandomTheme } from "./BookAPI"

import { Link } from "react-router-dom"

const theme = selectRandomTheme()
const book = fetchBookPages()
const pages = book.length - 1

function clamp(page) {
  if (page <= 0) return 0
  if (page >= pages) return pages
  return page
}
const linkToPrevPage = (page) => clamp(page - 1)
const linkToNextPage = (page) => clamp(page + 1)

function Book({ page = 0, className }) {
  page = Number(clamp(page))

  const [content, setContent] = useState()
  useEffect(() => {
    import(`${book[page]}`).then(setContent).catch(console.error)
  }, [page])

  return (
    <div className={`Book ${className}`}>
      <nav className="Header">
        <Link to={`/`}>
          <img alt="CodeBook" title="Home" src={`${process.env.PUBLIC_URL}/android-icon-36x36.png`} />
        </Link>
        <div className="Title">{content?.title}</div>
        <div className="Navigation">
          <Link className="Button" to={`/${linkToPrevPage(page)}`}>
            {"<"}
          </Link>
          <span className="Counter">
            {page}/{pages}
          </span>
          <Link className="Button" to={`/${linkToNextPage(page)}`}>
            {">"}
          </Link>
        </div>
      </nav>
      <div className={`Content Theme-${theme}`}>{content?.body}</div>
      <Footer />
    </div>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  const [seconds, setSeconds] = useState(0)
  const formatTimestamp = (seconds) => new Date(seconds * 1000).toISOString().substr(11, 8)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="Footer">
      © CodeBook
      <br />
      2020—{year}
      <span>{formatTimestamp(seconds)}</span>
      <a className="Link" href={process.env.REACT_APP_CONTRIBUTING_URL} target="_blank" rel="noopener noreferrer">
        Colabore <img alt="GitHub" src={`${process.env.PUBLIC_URL}/github.png`} />
      </a>
    </footer>
  )
}

export default Book
