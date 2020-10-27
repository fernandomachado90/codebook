import React from "react"
import "./App.css"
import Book from "./Book"
import Code from "./Code"

const prefill = {
  html: true,
  css: true,
  js: true,
}

const content = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae tortor sed quam ultricies tristique et nec orci. Vivamus augue orci, efficitur in laoreet sit amet, auctor non massa. Praesent mauris tortor, ultricies eu leo nec, interdum maximus erat. Nullam non lectus tristique diam egestas facilisis vel et turpis. Suspendisse quis ex mi. Cras semper gravida turpis vel facilisis. Nulla eu velit metus. Fusce tincidunt diam nisi, vel imperdiet eros tempor venenatis. Sed a malesuada ipsum. Nullam vulputate posuere accumsan.
Sed ac massa urna. Fusce eget mi dignissim urna pellentesque tristique vel at leo. Sed molestie vestibulum mi, quis gravida massa. Curabitur elit est, eleifend ut porttitor eget, suscipit nec lacus. Quisque in sem lobortis, sagittis odio et, varius magna. Suspendisse nec velit massa. Curabitur et eros nibh. Praesent vel mollis libero. Cras consequat ipsum non mattis dignissim. Proin blandit tellus lobortis sollicitudin dictum. Cras quis dolor a erat varius tempus.
Donec molestie pharetra lorem ut condimentum. Nunc ante tellus, placerat ac dolor vel, mattis suscipit massa. Nunc tempor felis fermentum, pulvinar augue non, dignissim nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum tincidunt aliquet ipsum vitae dapibus. Donec ut urna arcu. Nullam porttitor lorem vel velit egestas, sed auctor velit posuere. Sed fringilla odio at ex scelerisque, nec bibendum sapien interdum. Aliquam erat volutpat. Ut sed ligula non diam congue imperdiet. Pellentesque vehicula volutpat quam nec congue. In tempor feugiat urna dictum suscipit. Duis quis vulputate elit. Fusce convallis non lorem nec vestibulum. Pellentesque sit amet justo nec justo imperdiet ultrices sed euismod eros.
Aliquam pretium sapien egestas scelerisque ultricies. Integer ante metus, malesuada pulvinar aliquet vel, finibus ut neque. Maecenas ut dolor at orci varius aliquam. Phasellus sed sem id ipsum tristique pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus consequat nulla elit, vitae dignissim mi dignissim non. Mauris eget tortor in nulla vulputate mollis ut eu augue.
Donec vel aliquam sapien. Aliquam erat volutpat. Curabitur lacinia molestie ex vitae imperdiet. Praesent finibus justo id est tempor volutpat. Donec ut ultrices dolor. Donec ultricies, ligula rhoncus tincidunt mattis, tellus dolor volutpat purus, in congue tortor nunc mattis sem. Sed purus velit, pulvinar vel molestie quis, consequat sit amet diam. Nulla orci elit, tempus at orci sed, egestas bibendum dolor. Pellentesque pulvinar metus vel lacus facilisis, a posuere justo malesuada. Nulla ac est est. Sed sagittis eget massa a iaculis. Phasellus eu pretium mauris. Suspendisse potenti. Sed vestibulum vitae erat ac porttitor.
Generated 5 paragraphs, 414 words, 2800 bytes of Lorem Ipsum`

function App() {
  return (
    <div className="App">
      <Book header="Demo" content={content} className="Box Single" />
      <Code title="" {...prefill} className="Box Double" />
    </div>
  )
}

export default App
