import React from 'react'
import { useSwipeable } from 'react-swipeable';
import './styles.css';

function View(prop) {
  const {
    current, // index of the word being displayed
    total,   // total number of words known
    word,    // the current sight word being shown
    status,  // score|miss|next|prev basicly the last action taken
    next,    // func used to show the next word
    prev,    // func used to show the previous word
    hits,    // number of words the player/student has gotten right
    hit,     // func used to indicate that the player/student has gotten a word correctly
    misses,  // number of words the player/student has gotten wrong
    miss,    // func used to indicate that the player/student has gotten a word wrong
    reset    // fucn used to reset the Hits, Misses, and to go back to the first word.
  } = prop

  // Build the swipeable handlers
  const handlers = useSwipeable({
    onSwipedDown: _ => miss(),
    onSwipedUp: _ => hit(),
    onSwipedLeft: _ => next(),
    onSwipedRight: _ => prev(),
    preventDefaultTouchmoveEvent: true
  })

  // Build t he view
  const view = <div
    { ...handlers }
    className="app-header"
    onClick={next}
    onContextMenu={ e => {
      e.preventDefault()
      prev()
    }}>
    <p>
      {word}
    </p>
    <div className='app-report'>
      <div className='app-report-left'>
        {hits}
      </div>
      <div className='app-report-center'>
        {current}/{total}
      </div>
      <div className='app-report-right'>
        {misses}
      </div>
    </div>
    <div>
      {status}
    </div>
    <div className='bottom' onClick={ e => {
        e.preventDefault()
        e.stopPropagation()
        reset()
      }
    } />
  </div>

  // render the view
  return view
}

export default View;
