import React, { useEffect, useState } from "react"
import "./Book.css"

const settings = {
  pages: 3,
}

function Book({ className }) {
  const [content, setContent] = useState()

  const [page, setPage] = useState(0)
  const handlePrevPage = () => {
    if (0 < page) setPage(page - 1)
  }
  const handleNextPage = () => {
    if (page < settings.pages) setPage(page + 1)
  }

  useEffect(() => {
    import(`./pages/${page}.js`).then(({ title, body }) => {
      setContent({
        title: title,
        body: body,
      })
    })
  }, [page])

  return (
    <div className={`Book ${className ? className : ""}`}>
      <nav className="Header">
        <img alt="CodeBook" title="CodeBook" src={`${process.env.PUBLIC_URL}/android-icon-36x36.png`} />
        {content?.title}
        <div className="Navigation">
          <button onClick={handlePrevPage}>{"<"}</button>
          <span>
            {page}/{settings.pages}
          </span>
          <button onClick={handleNextPage}>{">"}</button>
        </div>
      </nav>
      <div className="Content">{content?.body}</div>
      <Footer />
    </div>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="Footer">
      © 2020-{year} CodeBook
      <a
        className="Link"
        href="https://github.com/fernandomachado90/janela-web"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="GitHub" src={`${process.env.PUBLIC_URL}/github.png`} />
        Colabore
      </a>
    </footer>
  )
}

export default Book
