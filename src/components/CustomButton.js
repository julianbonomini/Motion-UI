import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'native-base'
import { wp, hp} from '../utils/screen'

export default class CustomButton extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <Button style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 3,
    width: wp(80),
    height: hp(6),
    marginBottom: hp(2),
    borderRadius: hp(10)
  },
  text: {
    flex: 1,
    fontSize: hp(2),
    textAlign: 'center',
    fontWeight: 'bold'
  }
})