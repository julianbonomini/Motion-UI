import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Animated, Easing } from 'react-native'
import { Button } from 'native-base'

// const wp = percent => {
//   const width = Dimensions.get('window').width
//   return (percent * width) / 100
// }

// const hp = percent => {
//   const height = Dimensions.get('window').height
//   return (percent * height) / 100
// }

import {wp, hp} from '../utils/screen'

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      top: new Animated.Value(350)
    }
  }

  moveBackground = () => {
    Animated.timing(
      this.state.top,
      {
        toValue: -250,
        duration: 1000,
        easing: Easing.inOut(Easing.ease)
      }
    ).start()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>NEVER STOP HIKING</Text>
        <Animated.Image style={[styles.image, { top: this.state.top }]} source={require('../assets/Backgrounds/Mountains.png')} />
        <Button onPress={this.moveBackground}>
          <Text>
            Movete mierda
          </Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30
  },
  image: {
    width: wp(105),
    position: 'absolute'
  },
  title: {
    fontSize: 100
  }
})