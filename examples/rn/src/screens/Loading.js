import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { colors, styles } from '../styles'

export default function Loading() {
  return (
    <View style={styles.screen}>
      <View style={[styles.container, styles.centeredContent]}>
        <ActivityIndicator size='large' color={colors.primary} />
      </View>
    </View>
  )
}
