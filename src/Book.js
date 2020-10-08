import React from "react"
import "./Book.css"

function Book({ header, content, className }) {
  return (
    <div className={`Book ${className ? className : ""}`}>
      <div className="Header">{header}</div>
      <div className="Content">{content}</div>
      <div className="Footer">
        © Janela Web /<a href="https://github.com/fernandomachado90/janela-web">Contribute</a>
      </div>
    </div>
  )
}

export default Book
