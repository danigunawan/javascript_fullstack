import React, { Component } from 'react'
import { TouchableHighlight, AsyncStorage, View, Text, StyleSheet } from 'react-native'
let styles = {}

const person = {
  name: 'Zero Identidad',
  age: 100,
  occupation: 'Webear en la webera'
}

const key = 'president'

class AsyncStorageExample extends Component {

  constructor () {
    super()
    this.state = {
      person: {}
    }
    this.getPerson= this.getPerson.bind(this)
  }

  componentDidMount () {
    AsyncStorage.setItem(key, JSON.stringify(person))
      .then(() => console.log('item stored...'))
      .catch((err) => console.log('err: ', err))
  }

  getPerson () {
    AsyncStorage.getItem(key)
      .then((res) => this.setState({ person: JSON.parse(res) }))
      .catch((err) => console.log('err: ', err))
  }

  render () {

    const { person } = this.state
    
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Test AsyncStorage</Text>
        <TouchableHighlight onPress={this.getPerson} style={styles.button}>
          <Text>Obtener datos user</Text>
        </TouchableHighlight>
        <Text>{person.name}</Text>
        <Text>{person.age}</Text>
        <Text>{person.occupation}</Text>
      </View>
    )
  }

}

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: 20
  },
  button: {
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    height: 55,
    backgroundColor: '#dddddd'
  }
})

export default AsyncStorageExample