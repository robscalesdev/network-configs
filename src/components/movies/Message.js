import React from 'react'
import { deleteMessage } from '../../api/messages'

const Message = ({ message, user, refresh }) => {
  const handleDelete = () => {
    deleteMessage(message._id, user)
      .then(() => {
        refresh()
      })
      .catch(console.error)
  }

  return (
    <div style={{
      display: 'flex',
      borderBottom: 'solid',
      paddingTop: '1rem',
      marginLeft: '10%',
      width: '80%'
    }}>
      <p style={{ padding: '1rem', width: '20rem' }}>{message.owner.email}</p>
      <p style={{ padding: '1rem', width: '80%' }}>{message.text}</p>
      <div style={{ float: 'right', width: '20rem' }}>
        {user && user.token === message.owner.token && <button>Edit</button>}
        {user && user.token === message.owner.token && <button onClick={handleDelete}>Delete</button>}
      </div>
    </div>
  )
}

export default Message
