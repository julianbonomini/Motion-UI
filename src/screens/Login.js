import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Animated, Easing, TouchableOpacity } from 'react-native'
import { Form, Item, Label, Input, Button, Icon } from 'native-base'
import { wp, hp } from '../utils/screen'

const ANIMATION_TIME = 500

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: false,
    }
    this.setAnimatedValues()
  }

  setAnimatedValues = () => {
    this.animatedValues = {
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
      formLabelColors: new Animated.Value(0),
      spinValue: new Animated.Value(0)
    }
  }

  login = () => {
    this.setState({ loading: true })
  }

  goToRegister = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.animatedValues.loginOpacity,
          {
            toValue: 0,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.top,
          {
            toValue: -250,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.registerPosition,
          {
            toValue: hp(5),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.registrationTitleFontSize,
          {
            toValue: 50,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.loginPosition,
          {
            toValue: hp(0),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.registerButtonPositon,
          {
            toValue: hp(90),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.iconPosition,
          {
            toValue: hp(5),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        )
      ]),
      Animated.parallel([
        Animated.timing(
          this.animatedValues.registrationOpacity,
          {
            toValue: 1,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.formLabelColors,
          {
            toValue: 1,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        )
      ])
    ]).start()
  }

  backToLogin = () => {
    Animated.sequence([
      Animated.timing(
        this.animatedValues.spinValue,
        {
          toValue: 1,
          duration: ANIMATION_TIME / 2,
          easing: Easing.linear
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.animatedValues.loginOpacity,
          {
            toValue: 1,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.top,
          {
            toValue: 350,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.registerPosition,
          {
            toValue: hp(90),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.registrationTitleFontSize,
          {
            toValue: hp(2),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.loginPosition,
          {
            toValue: hp(80),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.registerButtonPositon,
          {
            toValue: hp(190),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.iconPosition,
          {
            toValue: hp(120),
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.registrationOpacity,
          {
            toValue: 0,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        ),
        Animated.timing(
          this.animatedValues.formLabelColors,
          {
            toValue: 0,
            duration: ANIMATION_TIME,
            easing: Easing.inOut(Easing.ease)
          }
        )
      ]),
      Animated.timing(
        this.animatedValues.spinValue,
        {
          toValue: 0,
          duration: 100,
          easing: Easing.inOut(Easing.ease)
        }
      )
    ]).start()
  }

  register = () => {
    console.log('asd')
  }

  render() {
    const spin = this.animatedValues.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '270deg']
    })
    const labelColor = this.animatedValues.formLabelColors.interpolate({
      inputRange: [0, 1],
      outputRange: ['#000', '#fff']
    })
    return (
      <View style={styles.container}>
        <Animated.Image style={[styles.image, { top: this.animatedValues.top }]} source={require('../assets/Backgrounds/Mountains.png')} />
        <Animated.View style={[styles.iconContainer, { top: this.animatedValues.iconPosition, transform: [{ rotate: spin }] }]}>
          <TouchableOpacity onPress={this.backToLogin}>
            <Icon ios='ios-arrow-back' android="md-arrow-back" style={{ fontSize: 60, color: 'white' }} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.Text style={[styles.title, { opacity: this.animatedValues.loginOpacity }]}>NEVER STOP HIKING</Animated.Text>
        <View style={styles.contentContainer}>
          <View style={[styles.form]}>
            <Form>
              <Item style={{ alignItems: 'flex-start', marginBottom: 20 }} stackedLabel>
                <Animated.Text style={{ color: labelColor }}>Username</Animated.Text>
                <Input />
              </Item>
              <Item style={{ alignItems: 'flex-start', marginBottom: 20 }} stackedLabel>
                <Animated.Text style={{ color: labelColor }}>Password</Animated.Text>
                <Input secureTextEntry={true} />
              </Item>
              <Animated.View style={{ opacity: this.animatedValues.registrationOpacity }}>
                <Item style={{ alignItems: 'flex-start', marginBottom: 20 }} stackedLabel>
                  <Animated.Text style={{ color: labelColor }}>Confirm Password</Animated.Text>
                  <Input secureTextEntry={true} />
                </Item>
                <Item style={{ alignItems: 'flex-start', marginBottom: 20 }} stackedLabel>
                  <Animated.Text style={{ color: labelColor }}>Email</Animated.Text>
                  <Input />
                </Item>
              </Animated.View>
            </Form>
          </View>
        </View>
        <Animated.View style={[styles.loginButton, { opacity: this.animatedValues.loginOpacity, top: this.animatedValues.loginPosition, width: wp(80) }]}>
          <Button style={[styles.button, { borderWidth: 3 }]} onPress={this.backToLogin}>
            <Text style={styles.text}>LOG IN</Text>
          </Button>
        </Animated.View>
        <Animated.View style={[styles.register, { top: this.animatedValues.registerPosition }]}>
          <TouchableOpacity onPress={this.goToRegister}>
            <Animated.Text style={[styles.text, { fontSize: this.animatedValues.registrationTitleFontSize }]}>REGISTER</Animated.Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.loginButton, { top: this.animatedValues.registerButtonPositon, width: this.animatedValues.registerButtonWidth }]}>
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
  },
  iconContainer: {
    position: 'absolute',
    left: wp(8),
  }
})