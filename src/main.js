import React, {useState} from 'react'
import View from './view'
import sightwords from './words'

const words = []

function setup () {
  const w = [...sightwords]

  while (w.length > 0) {
    console.log(w)
    let i = Math.floor(Math.random() * w.length)
    words.push(w[i])
    w.splice(i, 1)
  }
}
setup()


function App() {
  const [index, setIndex] = useState(0)
  const word = words[index]
  return <View
    current={index + 1}
    total={words.length}
    word={word}
    next={_ => {
      let nIndex = index + 1
      if (nIndex >= words.length) {
        nIndex = 0
      }
      setIndex(nIndex)
    }}
    prev={_ => {
      let nIndex = index - 1
      if (nIndex <= 0) {
        nIndex = words.length -1
      }
      setIndex(nIndex)
    }} />
}

export default App;
