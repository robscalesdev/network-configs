import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import { Link, Navigate } from 'react-router-dom'
import { createNetwork } from '../../api/api'

const NewNetwork = ({ user }) => {
  const [address, setAddress] = useState('')
  const [subnet, setSubnet] = useState('')
  const [created, setCreated] = useState(false)

  const onSubmitNetwork = (e) => {
    e.preventDefault()

    const body = {
      address,
      subnet,
      owner: user
    }
    createNetwork(body)
      .then(() => {
        setCreated(true)
      })
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleSubnetChange = (e) => {
    setSubnet(e.target.value)
  }

  if (created) {
    return <Navigate to='/' />
  }
  return (
    <div style={{ padding: '4rem 10% 0 10%' }}>
      <h3>New Network</h3>
      <Form onSubmit={onSubmitNetwork}>
        <Form.Group controlId='network'>
          <Form.Label>Network Address</Form.Label>
          <Form.Control
            required
            name='address'
            value={address}
            type='text'
            placeholder='Network Address'
            onChange={handleAddressChange}
          />
        </Form.Group>
        <Form.Group controlId='subnet'>
          <Form.Label>Subnet</Form.Label>
          <Form.Control
            required
            name='subnet'
            value={subnet}
            type='text'
            placeholder='Subnet'
            onChange={handleSubnetChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>Submit</Button>
        <Link to='/'>
          <Button variant='danger'>Cancel</Button>
        </Link>
      </Form>
    </div>
  )
}

export default NewNetwork
