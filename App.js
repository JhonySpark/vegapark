import React, { Component } from 'react'
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text
} from 'react-native'
import { Button } from 'react-native-elements'
import { clientConfig } from './scrpit-test/buildConfig'
import logo from './scrpit-test/images/logo.png'
import bg from './scrpit-test/images/img2.jpg'
export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  onLogin () {
    const { username, password } = this.state

    Alert.alert('Credentials', `${username} + ${password}`)
  }

  render () {
    return (
      <ImageBackground
        source={bg}
        imageStyle={{ opacity: 0.2 }}
        style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center'
        }}
      >
        <View style={styles.container}>
          <Image
            source={logo}
            style={{ width: 150, height: 150, marginBottom: 40 }}
          />
          <Text style={{ marginBottom: 20, fontSize: 30, fontWeight: 'bold' }}>{clientConfig.clientName}</Text>
          <TextInput
            placeholder='Usuário'
            style={styles.input}
          />
          <TextInput
            placeholder='Senha'
            secureTextEntry
            style={styles.input}
          />

          <Button
            title='Entrar'
            style={styles.input}
            containerStyle={{ width: 280 }}
            buttonStyle={{
              backgroundColor: clientConfig.clientThemeColor, height: 46
            }}
            onPress={this.onLogin.bind(this)}
          />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 280,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: clientConfig.clientThemeColor,
    marginBottom: 10
  }
})
