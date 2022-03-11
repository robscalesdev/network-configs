import apiUrl from '../apiConfig'
import axios from 'axios'

export const getNetworks = (owner) => {
  return axios({
    url: apiUrl + '/networks/',
    method: 'GET',
    headers: { Authorization: `Token ${owner.token}` }
  })
}

export const getNetwork = (id, owner) => {
  return axios({
    url: apiUrl + `/networks/${id}`,
    method: 'GET',
    headers: { Authorization: `Token ${owner.token}` }
  })
}

export const createNetwork = (body) => {
  console.log(body)
  return axios({
    url: apiUrl + '/networks/',
    method: 'POST',
    headers: { Authorization: `Token ${body.owner.token}` },
    data: {
      network: {
        address: body.address,
        subnet: body.subnet,
        owner: body.owner
      }
    }
  })
}

export const deleteNetwork = (id, user) => {
  return axios({
    url: apiUrl + `/networks/${id}/`,
    method: 'DELETE',
    headers: { Authorization: `Token ${user.token}` }
  })
}

export const changeNetwork = (id, user, body) => {
  return axios({
    url: apiUrl + `/networks/${id}/`,
    headers: { Authorization: `Token ${user.token}` },
    method: 'PATCH',
    data: {
      network: {
        address: body.address,
        subnet: body.subnet
      }
    }
  })
}
