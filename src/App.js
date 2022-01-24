/* eslint-disable no-tabs */
import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import Spacer from './components/Header/Spacer'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import { signIn } from './api/auth'
import Movies from './components/movies/Movies'
import Movie from './components/movies/Movie'
import Admin from '../src/components/movies/Admin'
import AdminMovie from '../src/components/movies/AdminMovie'
import MovieCreate from './components/movies/MovieCreate'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = (user) => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter((msg) => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return {
        msgAlerts: [...state.msgAlerts, { heading, message, variant, id }]
      }
    })
  }

  // automatic sign-in
  componentDidMount () {
    const credentials = {
      email: 'test@class',
      password: 'test'
    }

    signIn(credentials)
      .then(res => this.setUser(res.data.user))
      .catch(console.error)
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
	      <Header user={user} />
        <Spacer />
	      {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
	      <main>
          <Routes>
	         <Route
              path='/sign-up'
              element={
                <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
              }
            />
            <Route
              path='/sign-in'
              element={
                <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
              }
            />
            <Route
              path='/sign-out'
              element={
                <SignOut
                  msgAlert={this.msgAlert}
                  clearUser={this.clearUser}
                  user={user}
                />
              }
            />
            <Route
              path='/change-password'
              element={
                <ChangePassword msgAlert={this.msgAlert} user={user} />
              }
            />
            <Route
              path='/movies/:id'
              element={<Movie user={user} />}/>
            <Route
              path='/'
              element={<Movies />}
            />

            <Route
              path='/admin'
              element={<Admin />}
            />
            <Route
              path='/adminMovie/new'
              element={<MovieCreate />}
            />
            <Route
              path='/adminMovie/:id'
              element={<AdminMovie />}
            />
          </Routes>
        </main>
      </Fragment>
    )
  }
}

export default App
