import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <View style={styles.container}>
        <Text h1>
          Teste de App
        </Text>
        <Button
          title='Loading Button'
          loading={loading}
          onPress={() => loading ? setLoading(false) : setLoading(true)}
          containerStyle={styles.btn}
          buttonStyle={styles.button}
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
  },
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

export default App
