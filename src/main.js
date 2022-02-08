// Deploy on gitpage info here
// https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f
import React, { useState } from 'react'
import View from './view'
import sightwords from './words'

const TIMED_MODE = 'rapid_fire'
const NORMAL_MODE = 'normal_mode'
// the time in seconds used by the rapid fire mode
const TIME = 10
let time = 0
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
    // remove the word form the old array
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
  const [miss, setMiss] = useState(0)
  const [index, setIndex] = useState(0)
  const [mode, setMode] = useState(NORMAL_MODE)
  const [status, setStatus] = useState('')
  const word = words[index]


  function rapid (action) {
    // used to stop the rapid fire mode
    let stop = null

    /**
     * used to abstract setInterval functionality
     * @param {func} update - interval callback
     */
    function timer (update) {
      const id = setInterval(_ => {
        update()
      }, 1000)
      return _ => clearInterval(id)
    }

    if (action === 'reset') {
      rapid('stop')
      rapid('start')
    }
  
    if (action === 'stop') {
      if (stop != null) {
        stop()
        stop = null
        time = 0
        setStatus('')
      }
    }

    if (action == null || action === '' || action === 'start') {
      stop = timer(_ => {
        console.log('here')
        let nt = time + 1
        if (nt > TIME) {
          time = 0
          setMiss(miss + 1)
          setIndex(next(index))
        } else {
          time = nt
          setStatus(nt)
        }
      })  
    }
  }


  return <View
    current={index + 1}
    total={words.length}
    word={word}
    status={status}
    hits={hits}
    misses={miss}
    showTimer={mode === TIMED_MODE}
    time={time/TIME * 100}
    changeMode={_ => {
      if (mode === NORMAL_MODE) {
        setMode(TIMED_MODE)
        rapid('start')
      } else {
        setMode(NORMAL_MODE)
        rapid('stop')
      }
    }}
    next={_ => {
      setIndex(next(index))
      setStatus('Next')
    }}
    prev={_ => {
      setIndex(prev(index))
      setStatus("Prev")
    }}
    hit={ _ => {
      if (mode === TIMED_MODE) {
        rapid('reset')
      }
      setHits(hits + 1)
      setIndex(next(index))
      setStatus('Score')
    }}
    miss={ _ => {
      if (mode === TIMED_MODE) {
        rapid('reset')
      }
      setMiss(miss + 1)
      setIndex(next(index))
      setStatus('Miss')
    }}
    reset={ _ => {
      setHits(0)
      setMiss(0)
      setIndex(0)
    }} />
}

export default Main;
