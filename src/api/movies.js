import apiUrl from '../apiConfig'
import axios from 'axios'

export const getMovies = (genre) => {
  return axios({
    url: apiUrl + `/movies/?genre=${genre}`,
    method: 'GET'
  })
}
export const getMovie = (id) => {
  return axios({
    url: apiUrl + `/movies/${id}`,
    method: 'GET'
  })
}

export const createMovie = (body) => {
  console.log(body)
  return axios({
    url: apiUrl + '/movies/',
    method: 'POST',
    data: {
      movie: {
        title: body.title,
        genre: body.genre,
        owner: body.owner,
        image: body.image,
        link: body.link,
        description: body.description
      }
    }
  })
}

export const deleteMovie = (id) => {
  return axios({
    url: apiUrl + `/movies/${id}`,
    method: 'DELETE'
  })
}

export const changeMovie = (id, movie) => {
  return axios({
    url: apiUrl + `/movies/${id}`,
    method: 'PATCH',
    data: {
      movie
    }
  })
}
