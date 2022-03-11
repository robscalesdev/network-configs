import React, { Fragment, useEffect, useState } from 'react'
import { getNetworks } from '../../api/api'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

const Home = ({ user }) => {
  const [networks, setNetworks] = useState([])

  useEffect(() => {
    if (user) {
      getNetworks(user)
        .then(response => {
          setNetworks(response.data.networks)
          // console.log(response.data.networks)
        })
        .catch(console.error)
    }
  }, [])

  if (!user) {
    return <div style={{ padding: '4rem 10% 0 10%' }}>
      <h1>Hello world!</h1>
    </div>
  } else {
    return (
      <Fragment>
        <div style={{ padding: '4rem 10% 0 10%' }}>
          <Link to='/new-network'>
            <Button>New Network</Button>
          </Link>
          <div style={{ paddingTop: '2rem' }}>
            {(networks.length === 0 ? <h1>No networks to show</h1> : networks.map(network => <div key={network.id} style={{ display: 'flex', width: '20%' }}><h2 style={{ marginRight: '5rem' }}>{network.address}/{network.subnet}</h2><Link to={`/edit-network/${network.id}`}><Button>Edit</Button></Link></div>))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Home
