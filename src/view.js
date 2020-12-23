import React from 'react'
import { useSwipeable } from 'react-swipeable';
import './styles.css';

function View(prop) {
  // const delta = 30
  // const [origin, setOrigin] = useState(0)
  const { current, total, word, next, prev } = prop
  const handlers = useSwipeable({
    onSwipedDown: e => { console.log('DOWN ...', e)},
    onSwipedUp: e => { console.log('UP ...', e)},
    onSwipedLeft: _ => next(),
    onSwipedRight: _ => prev()
  })
  return (
    <div
      { ...handlers }
      className="app"
      onClick={next}
      onContextMenu={ e => {
        e.preventDefault()
        prev()
      }}>
      <header className="app-header">
        <div>
          {current}/{total}
        </div>
        <p>
          {word}
        </p>
      </header>
    </div>
  );
}

export default View;
