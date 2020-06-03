import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'

import AppContainer from './src/navigation'
import Loading from './src/screens/Loading'
import Login from './src/screens/Login'

export default class App extends Component {
  state = {
    isLoading: true,
    username: null
  }

  handleLogin = (name) => {
    return async () => {
      const username = name.trim()
      await AsyncStorage.setItem('username', username)
      this.setState({
        username: username
      })
    }
  }

  handleLogout = () => {
    return async () => {
      await AsyncStorage.removeItem('username')
      this.setState({
        username: null
      })
    }
  }
  
  async componentDidMount() {
    const username = await AsyncStorage.getItem('username')

    this.setState({
      isLoading: false,
      username: username
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    }
  
    if (this.state.username === null) {
      return (
        <Login onSubmit={this.handleLogin} />
      )
    }

    return (
      <AppContainer username={this.state.username} onLogoutPress={this.handleLogout()} />
    )
  }
}
