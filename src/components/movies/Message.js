import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom'
import { deleteMessage } from '../../api/messages'

const Message = ({ message, user, refresh }) => {
  const [deleted, setDeleted] = useState(false)

  const handleDelete = (event) => {
    event.preventDefault()
    console.log(message._id)
    deleteMessage(message._id, user)
      .then(() => {
        setDeleted(true)
        refresh()
      })
      .catch(console.error)
  }

  console.log(deleted)

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
