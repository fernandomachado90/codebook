import React, { useEffect, useState } from "react"
import settings from "./pages/settings.js"

import "./Book.css"

function Book({ className }) {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const [page, setPage] = useState(0)
  const handlePrevPage = () => {
    if (0 < page) setPage(page - 1)
  }
  const handleNextPage = () => {
    if (page < settings.pages) setPage(page + 1)
  }

  useEffect(() => {
    import(`./pages/${page}.js`).then(({ title, content }) => {
      setTitle(title)
      setContent(content)
    })
  }, [page])

  return (
    <div className={`Book ${className ? className : ""}`}>
      <nav className="Header">
        <span role="img" aria-label="title">
          📖
        </span>
        {title}
        <div className="Counter">
          <button onClick={handlePrevPage}>{"<"}</button>
          {` ${page}/${settings.pages} `}
          <button onClick={handleNextPage}>{">"}</button>
        </div>
      </nav>
      <div className="Content">{content}</div>
      <footer className="Footer">
        © 2020 Janela Web
        <a
          className="Link"
          href="https://github.com/fernandomachado90/janela-web"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="GitHub" src={`${process.env.PUBLIC_URL}/github.png`} />
          colabore
        </a>
      </footer>
    </div>
  )
}

export default Book
