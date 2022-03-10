import apiUrl from '../apiConfig'
import axios from 'axios'

export const getItem = (id) => {
  return axios({
    url: apiUrl + `/messages/${id}`,
    method: 'GET'
  })
}

export const createItem = (body) => {
  console.log(body)
  return axios({
    url: apiUrl + '/messages/',
    method: 'POST',
    headers: { Authorization: `Bearer ${body.owner.token}` },
    data: {
      message: {
        board: body.board,
        text: body.text,
        owner: body.owner
      }
    }
  })
}

export const deleteItem = (id, user) => {
  return axios({
    url: apiUrl + `/messages/${id}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${user.token}` }
  })
}

export const changeItem = (id, user, /*value*/) => {
  return axios({
    url: apiUrl + `/messages/${id}`,
    headers: { Authorization: `Bearer ${user.token}` },
    method: 'PATCH',
    data: {
      item: {
        value
      }
    }
  })
}
