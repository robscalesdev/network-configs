import React from 'react'

const Message = ({ message }) => {
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
        <button>Delete</button>
      </div>
    </div>
  )
}

export default Message
