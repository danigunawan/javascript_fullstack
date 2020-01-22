import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Alert } from 'react-native'
let styles = {}

class AlertExample extends Component {
  
  constructor () {
    super()
    this.state = {
      showMessage: false
    }
    this.showAlert = this.showAlert.bind(this)
  }

  showAlert () {
    Alert.alert(
      'Titulo',
      'Mensaje Watahea!',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Dismiss called...'),
          style: 'destructive'
        },
        {
          text: 'Mostrar mensaje',
          onPress: () => this.setState({ showMessage: true })
        }
      ]
    )
  }

  render () {

    const { showMessage } = this.state

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.showAlert} style={styles.button}>
          <Text>MOSTRAR ALERTA</Text>
        </TouchableHighlight>
        {
          showMessage && <Text>Mostrando mensaje - éxito</Text>
        }
      </View>
    )
  }

}

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  button: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed'
  }
})

export default AlertExample