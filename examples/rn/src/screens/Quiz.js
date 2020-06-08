import React, { Component, Fragment } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Button from '../components/Button'
import { colors, styles } from '../styles'

const data = [
  {
    id: 'q-1',
    title: '2 + 2 * 2',
    answers: [
      {id: 'a-1-1', text: '8', correct: false},
      {id: 'a-1-2', text: '6', correct: true},
    ]
  },  
  {
    id: 'q-2',
    title: 'JavaScript - то же, что и Java',
    answers: [
      {id: 'a-2-1', text: 'нет', correct: true},
      {id: 'a-2-2', text: 'да', correct: false},
    ]
  },
  {
    id: 'q-3',
    title: 'HTML тег для JavaScript',
    answers: [
      {id: 'a-3-1', text: '<javascript>', correct: false},
      {id: 'a-3-2', text: '<script>', correct: true},
    ]
  }
]

export default class Quiz extends Component {
  state = {
    count: 0,
    current: 0,
    result: 0,
    selected: null
  }

  handlePress = () => {
    this.setState(state => {
      return {
        count: ++state.count,
        result: state.result + state.current,
        selected: null
      }    
    })
  }

  handleReset = () => {
    this.setState({
      count: 0,
      current: 0,
      result: 0,
      selected: null
    })
  }

  handleSelect = (id, isCorrect) => {
    return () => {
      this.setState({
        current: isCorrect ? 1 : 0,
        selected: id
      })
    }
  }

  render() {
    return (
      <View style={[styles.screen, styles.container]}>
        {this.state.count < data.length ? (
          <Fragment>
            <Text style={styles.title}>{data[this.state.count].title}</Text>
            {data[this.state.count].answers.map(item => (
              <TouchableOpacity key={item.id} activeOpacity={1} style={{...styles.quizItem, backgroundColor: item.id === this.state.selected ? colors.secondary : '#fff'}} onPress={this.handleSelect(item.id, item.correct)}>
                <Text>{item.text}</Text>
              </TouchableOpacity>
            ))}
            <Button title='Далее' disabled={!this.state.selected} style={styles.formButton} onPress={this.handlePress} />
          </Fragment>
        ) : (
          <Fragment>
            <Text style={styles.title}>Ваш результат: {this.state.result} из {data.length}</Text>
            <Button title='Пройти еще раз' style={styles.formButton} onPress={this.handleReset} />
          </Fragment>
        )}
      </View>
    )
  }
}
