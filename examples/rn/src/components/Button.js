import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles'

export default function Button(props) {
  return (
    <TouchableOpacity activeOpacity={0.9} disabled={props.disabled} style={[styles.button, props.style, props.disabled && {opacity: 0.5}]} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}
