import React from "react"
import { HashRouter as Router, Switch, Route, useParams } from "react-router-dom"
import "./App.css"
import Book from "./Book"
import Code from "./Code"

function BookWithParams() {
  const { page } = useParams()
  return <Book page={page} className="Box Single" />
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<BookWithParams />} />
        <Route path="/:page" children={<BookWithParams />} />
      </Switch>
      <Code title="CodeBook" className="Box Double" />
    </Router>
  )
}

export default App
