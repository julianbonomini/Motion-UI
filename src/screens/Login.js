import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Animated, Easing, TouchableOpacity } from 'react-native'
import { Form, Item, Label, Input, Button } from 'native-base'
import { wp, hp } from '../utils/screen'

const ANIMATION_TIME = 500

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      top: new Animated.Value(350),
      loginOpacity: new Animated.Value(1),
      registrationOpacity: new Animated.Value(0),
      registerPosition: new Animated.Value(hp(90)),
      buttonsBorderWidth: new Animated.Value(3),
      registrationTitleFontSize: new Animated.Value(hp(2)),
      loginPosition: new Animated.Value(hp(80)),
      registerButtonPositon: new Animated.Value(hp(190)),
      registerButtonWidth: new Animated.Value(wp(80)),
      iconPosition: new Animated.Value(hp(120)),
      loading: false,
    }
  }

  login = () => {
    this.setState({ loading: true })
  }

  moveBackground = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.loginOpacity,
          {
            toValue: 0,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.state.top,
          {
            toValue: -250,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.state.registerPosition,
          {
            toValue: hp(5),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.state.registrationTitleFontSize,
          {
            toValue: 50,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.state.loginPosition,
          {
            toValue: hp(0),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.state.registerButtonPositon,
          {
            toValue: hp(90),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.state.iconPosition,
          {
            toValue: hp(6),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.state.registrationOpacity,
          {
            toValue: 1,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),

      ])
    ]).start()
  }

  register = () => {
    console.log('asd')
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image style={[styles.image, { top: this.state.top }]} source={require('../assets/Backgrounds/Mountains.png')} />
        <Animated.Text style={[styles.title, { opacity: this.state.loginOpacity }]}>NEVER STOP HIKING</Animated.Text>
        <View style={styles.contentContainer}>
          <View style={[styles.form]}>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry={true} />
              </Item>
              <Animated.View style={{ opacity: this.state.registrationOpacity }}>
                <Item floatingLabel>
                  <Label>Confirm Password</Label>
                  <Input secureTextEntry={true} />
                </Item>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input />
                </Item>
              </Animated.View>
            </Form>
          </View>
        </View>
        <Animated.View style={[styles.loginButton, { opacity: this.state.loginOpacity, top: this.state.loginPosition, width: wp(80) }]}>
          <Button style={[styles.button, { borderWidth: 3 }]} onPress={this.login}>
            <Text style={styles.text}>LOG IN</Text>
          </Button>
        </Animated.View>
        <Animated.View style={[styles.register, { top: this.state.registerPosition }]}>
          <TouchableOpacity onPress={this.moveBackground}>
            <Animated.Text style={[styles.text, { fontSize: this.state.registrationTitleFontSize }]}>REGISTER</Animated.Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.loginButton, { top: this.state.registerButtonPositon, width: this.state.registerButtonWidth }]}>
          <Button style={[styles.button, { borderWidth: 3 }]} onPress={this.register}>
            <Text style={styles.text}>REGISTER</Text>
          </Button>
        </Animated.View>
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
  contentContainer: {
    marginTop: hp(15)
  },
  image: {
    width: wp(105),
    position: 'absolute'
  },
  title: {
    position: 'absolute',
    top: hp(5),
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  registrationTitle: {
    color: '#fff'
  },
  form: {
    width: wp(80),
  },
  loginButton: {
    position: 'absolute',
    alignItems: 'center',
    paddingBottom: hp(5)
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    height: hp(6),
    marginBottom: hp(2),
    borderRadius: hp(10),
  },
  register: {
    position: 'absolute',
  },
  text: {
    flex: 1,
    fontSize: hp(2),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  }
})