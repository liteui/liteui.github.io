import React, { Component } from 'react'
import { KeyboardAvoidingView, Platform, TextInput, View } from 'react-native'
import Button from '../components/Button'
import { colors, styles } from '../styles'

export default class Login extends Component {
  state = {
    name: ''
  }

  handleChangeText = (text) => {
    this.setState({
      name: text
    })
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.screen}
      >
        <View style={[styles.container, styles.centeredContent]}>
          <TextInput
            placeholder='Введите свое имя'
            placeholderTextColor={colors.input}
            value={this.state.name}
            style={styles.input}
            onChangeText={this.handleChangeText}
          />
          <Button title='Далее' disabled={this.state.name.trim() === ''} style={styles.formButton} onPress={this.props.onSubmit(this.state.name)} />
        </View>
      </KeyboardAvoidingView>
    )
  }
}
