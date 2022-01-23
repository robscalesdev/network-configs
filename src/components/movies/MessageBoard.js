import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createMessage, getMessages } from '../../api/messages'
import Message from './Message'

const MessageBoard = ({ user }) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [numMessages, setNumMessages] = useState(10)

  const { id } = useParams()

  useEffect(() => {
    getMessages(id)
      .then(res => {
        console.log(res.data)
        setMessages(res.data.messages.reverse().slice(0, numMessages))
      })
      .catch(console.error)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()

    const body = {
      board: id,
      text: newMessage,
      owner: user.email
    }

    createMessage(body)
      .then(() => {
        setNewMessage('')
      })
      .catch(console.error)
  }

  const onRefresh = (e) => {
    e.preventDefault()

    getMessages(id)
      .then(res => {
        console.log(res.data)
        setMessages(res.data.messages.reverse().slice(0, numMessages))
      })
      .catch(console.error)
  }

  const onMessageChange = e => {
    e.preventDefault()

    setNewMessage(e.target.value)
  }

  const onNumMessageChange = (e) => {
    e.preventDefault()

    setNumMessages(e.target.value)
  }

  return (
    <div style={{
      marginTop: '2rem',
      width: '100%',
      height: '500px'
    }}>
      <h4>message board</h4>
      <div style={{
        display: 'flex',
        flexDirection: 'row'
        // justifyContent: 'center',
        // alignItems: 'center'
      }}>
        <p style={{ margin: 'auto 0.5rem auto 1rem' }}> Messages Displayed: </p>
        <input value={numMessages} onChange={onNumMessageChange} style={{ width: '3rem', textAlign: 'center' }}></input>
        <button onClick={onRefresh}>Refresh</button>
      </div>
      {user && <form onSubmit={onSubmit} style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <p style={{ margin: 'auto 0.5rem auto 1rem' }}>New message: </p>
        <input style={{
          width: '50%',
          height: '3rem'
        }}
        value={newMessage} onChange={onMessageChange}></input>
        <button>Submit</button>
      </form>}
      {messages.map(message => {
        return <Message key={message._id} message={message}/>
      })}
    </div>
  )
}

export default MessageBoard
