import React from 'react'
import { Button, Icon, Modal  } from 'semantic-ui-react'
import './styles.css';

function Help(prop) {
  return <Modal
    basic
    onClose={() => prop.setOpen(false)}
    onOpen={() => prop.setOpen(true)}
    open={prop.open}
    size='small'
  >
    <Modal.Content>
      <p>
        <br/>Swipe up when answer corect.
        <br/>Swipe down when answer is wrong.
        <br/>Tap work when answer is unknown.
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' inverted onClick={() => prop.setOpen(false)}>
        <Icon name='checkmark' /> OK
      </Button>
    </Modal.Actions>
  </Modal>
}

export default Help;