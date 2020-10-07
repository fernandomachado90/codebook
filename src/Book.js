import React from "react"
import "./Book.css"

function Book({ className }) {
  return <div className={`Book ${className ? className : ""}`}>book</div>
}

export default Book
