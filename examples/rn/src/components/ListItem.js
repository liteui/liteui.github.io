import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { colors } from '../styles'

export default function ListItem(props) {
  return (
    <TouchableOpacity activeOpacity={0.75} style={[styles.container, props.style]} onPress={props.onPress}>
      <View style={styles.header}>
        <Text style={styles.author}>{props.author}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    padding: 12
  },
  header: {
    flexDirection: 'row',
    marginBottom: 8
  },
  author: {
    fontStyle: 'italic',
    marginRight: 12
  },
  title: {
    fontSize: 18,
    marginBottom: 8
  }
})
