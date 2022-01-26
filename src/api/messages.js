import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMessages = (id) => {
  return axios({
    url: apiUrl + `/messages/${id}`,
    method: 'GET'
  })
}

export const createMessage = (body) => {
  console.log(body)
  return axios({
    url: apiUrl + '/messages/',
    method: 'POST',
    data: {
      message: {
        board: body.board,
        text: body.text,
        owner: body.owner
      }
    }
  })
}

export const deleteMessage = (id, user) => {
  return axios({
    url: apiUrl + `/messages/${id}`,
    method: 'DELETE',
    headers: { Authorization: `Bearer ${user.token}` }
  })
}

export const changeMessage = (id, text) => {
  return axios({
    url: apiUrl + `/messages/${id}`,
    method: 'PATCH',
    data: {
      message: {
        text
      }
    }
  })
}
