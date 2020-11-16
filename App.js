import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-elements'
/* import { Colors } from 'react-native/Libraries/NewAppScreen' */
import { clientConfig } from './script-test/buildConfig'
import logo from './script-test/images/logo.png'
import img1 from './script-test/images/img1.jpg'
import img2 from './script-test/images/img2.jpg'

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>
          teste
        </Text>
        <Text h1 style={{ color: clientConfig.clientThemeColor }}>
          {clientConfig.clientName}
        </Text>
        <Text>
          {clientConfig.clientSignInText}
        </Text>
        <Text>
          {clientConfig.clientHomeText}
        </Text>
        <Text>
          {clientConfig.clientId}
        </Text>

        <Image
          source={logo}
          style={{ width: 150, height: 150 }}
        />
        <Image
          source={img1}
          style={{ width: 150, height: 150 }}
        />
        <Image
          source={img2}
          style={{ width: 150, height: 150 }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  btn: {
    width: 200,
    marginTop: 20
  },
  button: {
    borderRadius: 9,
    height: 50
  }
})

export default App
