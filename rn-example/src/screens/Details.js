import React from 'react'
import { ScrollView, Text } from 'react-native'
import { styles } from '../styles'

export default function Details(props) {
  const data = props.route.params.details

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.detailsAuthor}>{data.author}</Text>
      <Text style={styles.detailsDate}>{data.date}</Text>
      <Text style={styles.detailsText}>{data.text}</Text>
    </ScrollView>
  )
}
