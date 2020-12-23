import React, {useState} from 'react'
import './styles.css';

function View(prop) {
  const delta = 30
  const [origin, setOrigin] = useState(0)
  const { word, next, prev } = prop
  return (
    <div
      className="app"
      onMouseDown={e => setOrigin(e.offsetX)}
      onMouseUp={e => {
        const move = e.offsetX - origin
        if (move > delta) {
          if (move <= 0) {
            next()
            console.log('Do Next')
          } else {
            prev()
            console.log('Do Prev')
          }
        }
      }}>
      <header className="app-header">
        <p>
          {word}
        </p>
      </header>
    </div>
  );
}

export default View;
