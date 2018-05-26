import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Animated, Easing } from 'react-native'
import { Button, Form, Item, Label, Input } from 'native-base'
import { wp, hp } from '../utils/screen'

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
        <Animated.Image style={[styles.image, { top: this.state.top }]} source={require('../assets/Backgrounds/Mountains.png')} />
        <Text style={styles.title}>NEVER STOP HIKING</Text>
        <View style={styles.form}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
          </Form>
        </View>
        <View style={styles.buttons}>
          <Button onPress={this.moveBackground}>
            <Text>Movete mierda</Text>
          </Button>
          <Button onPress={this.moveBackground}>
            <Text>Movete mierda</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 45,
    flexDirection: 'column'
  },
  image: {
    width: wp(105),
    position: 'absolute'
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  form: {
    width: wp(80),
    marginTop: hp(3)
  },
  buttons: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: hp(8)
  }
})