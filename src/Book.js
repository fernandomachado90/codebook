import React from "react"
import "./Book.css"

function Book({ header, content, className }) {
  return (
    <div className={`Book ${className ? className : ""}`}>
      <nav className="Header">
        {header}
        <div>1/10</div>
      </nav>
      <div className="Content">{content}</div>
      <footer className="Footer">
        © 2020 Janela Web
        <a className="Link" href="https://github.com/fernandomachado90/janela-web" 
          target="_blank" rel="noopener noreferrer">
          <img alt="GitHub" src={`${process.env.PUBLIC_URL}/github.png`} />
          colabore
        </a>
      </footer>
    </div>
  )
}

export default Book
