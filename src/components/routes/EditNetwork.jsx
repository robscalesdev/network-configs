import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getNetwork, changeNetwork, deleteNetwork } from '../../api/api'

const EditNetwork = ({ user }) => {
  const { id } = useParams()
  const [address, setAddress] = useState('')
  const [subnet, setSubnet] = useState('')
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    getNetwork(id, user)
      .then(response => {
        setAddress(response.data.network.address)
        setSubnet(response.data.network.subnet)
      })
  }, [])

  const onEditNetwork = (e) => {
    e.preventDefault()

    const body = {
      address,
      subnet
    }
    changeNetwork(id, user, body)
      .then(() => {
        setChanged(true)
      })
  }

  const onDeleteNetwork = (e) => {
    deleteNetwork(id, user)
      .then(() => {
        setChanged(true)
      })
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value)
  }

  const handleSubnetChange = (e) => {
    setSubnet(e.target.value)
  }

  if (changed) {
    return <Navigate to='/' />
  }
  return (
    <div style={{ padding: '4rem 10% 0 10%' }}>
      <h3>Edit Network</h3>
      <Form onSubmit={onEditNetwork}>
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
        <Button variant='primary' type='submit'>Update</Button>
        <Button variant='outline-danger' onClick={onDeleteNetwork}>Delete</Button>
        <Link to='/'>
          <Button variant='danger'>Cancel</Button>
        </Link>
      </Form>
    </div>
  )
}

export default EditNetwork
