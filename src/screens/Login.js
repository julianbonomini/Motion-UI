import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Animated, Easing } from 'react-native'
import { Form, Item, Label, Input } from 'native-base'
import { wp, hp } from '../utils/screen'
import CustomButton from '../components/CustomButton'

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      top: new Animated.Value(350),
      loginOpacity: new Animated.Value(1),
      registrationOpacity: new Animated.Value(0),
      loading: false,
    }
  }

  login = () => {
    this.setState({ loading: true })
  }

  moveBackground = () => {
    Animated.parallel([
      Animated.timing(
        this.state.loginOpacity,
        {
          toValue: 0,
          duration: 500,
          easing: Easing.inOut(Easing.ease)
        }
      ),
      Animated.timing(
        this.state.top,
        {
          toValue: -250,
          duration: 1000,
          easing: Easing.inOut(Easing.ease)
        }
      ),
    ]).start()
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image style={[styles.image, { top: this.state.top }]} source={require('../assets/Backgrounds/Mountains.png')} />
        <Animated.Text style={[styles.title, { opacity: this.state.loginOpacity }]}>NEVER STOP HIKING</Animated.Text>
        <Animated.Text style={[styles.title, styles.registrationTitle, { opacity: this.state.registrationOpacity }]}>REGISTRATION</Animated.Text>
        <View style={styles.contentContainer}>
          <Animated.View style={[styles.form, { opacity: this.state.loginOpacity }]}>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry={true} />
              </Item>
              <Animated.View style={{opacity: this.state.registrationOpacity}}>
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
          </Animated.View>
        </View>
        <View style={styles.buttons}>
          <CustomButton onPress={this.login}>
            {this.state.loading ?
              <Text style={styles.text}>a</Text> :
              <Text style={styles.text}>LOG IN</Text>
            }
          </CustomButton>
          <CustomButton onPress={this.moveBackground}>
            <Text style={styles.text}>REGISTER</Text>
          </CustomButton>
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
  contentContainer: {
    marginTop: hp(15)
  },
  image: {
    width: wp(105),
    position: 'absolute'
  },
  title: {
    position: 'absolute',
    top: 50,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  registrationTitle: {
    color: '#000'
  },
  form: {
    width: wp(80),
  },
  buttons: {
    flex: 1,
    width: wp(80),
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: hp(5)
  },
  text: {
    flex: 1,
    fontSize: hp(2),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  }
})