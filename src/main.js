import React, {useState} from 'react'
import View from './view'
import sightwords from './words'

// the list of words to test the student on
const words = setup(sightwords)

/**
 * used to randomize the list of sight words to prevent the studdent from expecting a given order
 * @param {array} sightwords - list of sight words to test the student with
 */
function setup (sightwords) {
  const w = [...sightwords] // copy the sightwords array so we can distory it as we go
  const ret = [] // the new randomized array

  // Build the new array
  while (w.length > 0) {
    // randomly select a word from the old array
    let i = Math.floor(Math.random() * w.length)
    // put the word in the new array
    ret.push(w[i])
    // remove the word form the old aray
    w.splice(i, 1)
  }

  // return the new randomize array
  return ret
}

/**
 * get the index for the next display word 
 * @param {number} index - the index of the currently displayed word
 */
function next (index) {
  let nIndex = index + 1
  // if we are going over the out of bounds of the array go back to 0
  if (nIndex >= words.length) {
    nIndex = 0
  }
  return nIndex
}

/**
 * get the index of the previously displayed word
 * @param {number} index - the index of the currently displayed word
 */
function prev (index) {
  let nIndex = index - 1
  if (nIndex <= 0) {
    nIndex = words.length -1
  }
  return nIndex
}

/**
 * run the application
 */
function Main() {
  const [hits, setHits] = useState(0)
  const [misses, setMisses] = useState(0)
  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState('')
  const word = words[index]
  return <View
    current={index + 1}
    total={words.length}
    word={word}
    status={status}
    hits={hits}
    misses={misses}
    next={_ => {
      setIndex(next(index))
      setStatus('Next')
    }}
    prev={_ => {
      setIndex(prev(index))
      setStatus("Prev")
    }}
    hit={ _ => {
      setHits(hits + 1)
      setIndex(next(index))
      setStatus('Score')
    }}
    miss={ _ => {
      setMisses(misses + 1)
      setIndex(next(index))
      setStatus('Miss')
    }}
    reset={ _ => {
      setHits(0)
      setMisses(0)
      setIndex(0)
    }} />
}

export default Main;
