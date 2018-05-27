import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'
import { Form, Label, Item, Input } from 'native-base'
import { wp, hp } from '../utils/screen'
import RealEasing from 'easing-functions'

const DEBUG_ANIMATION_TIME = 3000
const ANIMATION_DURATION_FAST = 100
const ANIMATION_DURATION_REGULAR = 500
const ANIMATION_DURATION_SLOW = 1000
const ANIMATION_DURATION_SUPER_SLOW = 2500

export default class CreditCard extends React.Component {

  constructor() {
    super()
    this.state = {
      addingCreditCard: false,
      cardNumber: 'XXXX XXXX XXXX XXXX',
      cardName: 'YOUR NAME HERE',
      THRU: 'XX/XX'
    }
    this.setAnimatedValues()
  }

  setAnimatedValues = () => {
    this.animatedValues = {
      creditCard: {
        height: new Animated.Value(wp(30)),
        width: new Animated.Value(wp(30)),
        borderRadius: new Animated.Value(wp(20)),
        bottom: new Animated.Value(hp(5)),
        opacity: new Animated.Value(1)
      },
      creditCardImage: {
        opacity: new Animated.Value(0)
      },
      creditCardData: {
        opacity: new Animated.Value(0),
        formOpacity: new Animated.Value(0)
      }
    }
  }

  addCreditCard = () => {
    this.setState({ addingCreditCard: true })

    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.animatedValues.creditCard.height,
          {
            toValue: wp(50),
            duration: ANIMATION_DURATION_REGULAR,
            easing: RealEasing.Elastic.In
          }
        ),
        Animated.timing(
          this.animatedValues.creditCard.width,
          {
            toValue: wp(20),
            duration: ANIMATION_DURATION_REGULAR,
            easing: RealEasing.Elastic.In
          }
        )
      ]),
      Animated.timing(
        this.animatedValues.creditCard.bottom,
        {
          toValue: hp(70),
          duration: ANIMATION_DURATION_FAST,
          easing: RealEasing.Circular.In
        }
      ),
      Animated.parallel([
        Animated.timing(
          this.animatedValues.creditCard.width,
          {
            toValue: wp(90),
            duration: ANIMATION_DURATION_REGULAR,
            easing: RealEasing.Bounce.Out
          }
        ),
        Animated.timing(
          this.animatedValues.creditCard.height,
          {
            toValue: wp(50),
            duration: ANIMATION_DURATION_REGULAR,
            easing: RealEasing.Bounce.Out
          }
        ),
        Animated.timing(
          this.animatedValues.creditCard.borderRadius,
          {
            toValue: wp(2),
            duration: ANIMATION_DURATION_REGULAR,
            easing: RealEasing.Circular.Out
          }
        )
      ]),
      Animated.sequence([
        Animated.parallel([
          Animated.timing(
            this.animatedValues.creditCardImage.opacity,
            {
              toValue: 1,
              duration: ANIMATION_DURATION_REGULAR,
              easing: RealEasing.Exponential.Out
            }
          ),
          Animated.timing(
            this.animatedValues.creditCardData.opacity,
            {
              toValue: 1,
              duration: ANIMATION_DURATION_REGULAR,
              easing: RealEasing.Exponential.Out
            }
          )
        ]),
        Animated.parallel([
          Animated.timing(
            this.animatedValues.creditCard.opacity,
            {
              toValue: 0,
              duration: ANIMATION_DURATION_SUPER_SLOW,
              easing: RealEasing.Exponential.Out
            }
          ),
          Animated.timing(
            this.animatedValues.creditCardData.formOpacity,
            {
              toValue: 1,
              duration: ANIMATION_DURATION_REGULAR,
              easing: RealEasing.Exponential.Out
            }
          )
        ]),
      ])
    ]).start()
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.Image style={[styles.creditCardImage, { opacity: this.animatedValues.creditCardImage.opacity }]} source={require('../assets/Backgrounds/CreditCardBackground.png')} />
        <Animated.View style={[styles.creditCardData, { opacity: this.animatedValues.creditCardData.opacity }]}>
          <Text style={{ color: 'white', fontSize: hp(2) }}>NEVER STOP HIKING</Text>
          <Text style={styles.creditCardNumber}>{this.state.cardNumber}</Text>
          <View style={styles.creditCardThru}>
            <Text style={{ color: 'white', fontSize: hp(1) }}>{this.state.THRU}</Text>
            <Text style={{ color: 'white', fontSize: hp(2) }}>xx/xx</Text>
          </View>
          <Text style={styles.creditCardName}>{this.state.cardName}</Text>
        </Animated.View>
        <Animated.View style={[styles.form, { opacity: this.animatedValues.creditCardData.formOpacity }]}>
          <Form>
            <View style={styles.formNumbers}>
              <Item floatingLabel>
                <Label>Card Number</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>THRU</Label>
                <Input />
              </Item>
            </View>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input />
            </Item>
          </Form>
        </Animated.View>
        <View style={styles.footer}>
          <View style={styles.footerFoot}>
          </View>
          <Animated.View style={[styles.creditCard,
          {
            height: this.animatedValues.creditCard.height,
            width: this.animatedValues.creditCard.width,
            borderRadius: this.animatedValues.creditCard.borderRadius,
            bottom: this.animatedValues.creditCard.bottom,
            opacity: this.animatedValues.creditCard.opacity
          }]}>
          </Animated.View>
          {!this.state.addingCreditCard &&
            <TouchableOpacity style={styles.plusButtonImaginary} onPress={this.addCreditCard}>
            </TouchableOpacity>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  footer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000'
  },
  footerFoot: {
    height: hp(10),
    width: wp(100),
    backgroundColor: '#92547E'
  },
  creditCard: {
    position: 'absolute',
    backgroundColor: '#b9caf4',
    borderWidth: 2,
    borderColor: '#9b7fa9',
  },
  creditCardImage: {
    position: 'absolute',
    width: wp(90),
    height: wp(50),
    bottom: hp(70),
    borderRadius: wp(2)
  },
  creditCardData: {
    padding: wp(5),
    position: 'absolute',
    flex: 1,
    width: wp(90),
    height: wp(50),
    bottom: hp(70),
    borderRadius: wp(2)
  },
  creditCardNumber: {
    position: 'absolute',
    color: 'white',
    bottom: hp(12),
    left: wp(5),
    fontWeight: 'bold',
    fontSize: hp(2)
  },
  creditCardName: {
    position: 'absolute',
    color: 'white',
    bottom: hp(2),
    left: wp(5),
    fontSize: hp(2)
  },
  creditCardThru: {
    position: 'absolute',
    bottom: hp(6),
    left: wp(50)
  },
  form: {
    width: wp(90),
    height: hp(65),
  },
  plusButtonImaginary: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: hp(5),
    height: wp(35),
    width: wp(35),
    borderRadius: wp(20)
  }
})