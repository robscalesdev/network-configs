import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { deleteMessage } from '../../api/messages'

const Message = ({ message, user }) => {
  const [deleted, setDeleted] = useState(false)

  const handleDelete = (event) => {
    event.preventDefault()
    console.log(message._id)
    deleteMessage(message._id, user)
      .then(() => {
        setDeleted(true)
      })
      .catch(console.error)
  }

  if (deleted) {
    return <Navigate to='/movies/:id' />
  }

  return (
    <div style={{
      display: 'flex',
      borderBottom: 'solid',
      paddingTop: '1rem',
      marginLeft: '10%',
      width: '80%'
    }}>
      <p style={{ padding: '1rem' }}>{message.owner}</p>
      <p style={{ padding: '1rem', width: '80%' }}>{message.text}</p>
      <div style={{ float: 'right' }}>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Message
