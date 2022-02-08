import React from 'react'
import { useSwipeable } from 'react-swipeable'
import { Button, Progress, Segment } from 'semantic-ui-react'
import './styles.css';

function View(prop) {
  const {
    current,   // index of the word being displayed
    total,     // total number of words known
    word,      // the current sight word being shown
    status,    // score|miss|next|prev basicly the last action taken
    next,      // func used to show the next word
    prev,      // func used to show the previous word
    hits,      // number of words the player/student has gotten right
    hit,       // func used to indicate that the player/student has gotten a word correctly
    misses,    // number of words the player/student has gotten wrong
    miss,      // func used to indicate that the player/student has gotten a word wrong
    reset,     // func used to reset the Hits, Misses, and to go back to the first word.
    showTimer, // show the timer
    changeMode,// Used to change the game mode form timed to normal
    time       // if game mode === timed then this is the time left before the end of the round
  } = prop

  // Build the swipeable handlers
  const handlers = useSwipeable({
    onSwipedDown: _ => miss(),
    onSwipedUp: _ => hit(),
    onSwipedLeft: _ => next(),
    onSwipedRight: _ => prev(),
    preventDefaultTouchmoveEvent: true
  })

  let prog
  if (showTimer) {
    prog = <Segment inverted>
      <Progress percent={time} inverted/>
    </Segment>
  }

  let modeText = 'Start'
  if (showTimer) {
    modeText = 'End'
  }
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
    {/* <div className='bottom'>
        <div>
          <div className='app-buttons'>
            <Button
              fluid
              onClick={e => {
                e.preventDefault()
                e.stopPropagation()
                changeMode()
              }}>
              {modeText}
            </Button>
          </div>
          <div className='on-right'>
            <div className='app-buttons'>
              <Button
                fluid
                onClick={e => {
                  e.preventDefault()
                  e.stopPropagation()
                  reset()
                }}>
                  Reset
              </Button>
            </div>
          </div>
        </div>
        <div className='progress-div'>
          {prog}
        </div>
    </div> */}
  </div>

  // render the view
  return view
}

export default View;
