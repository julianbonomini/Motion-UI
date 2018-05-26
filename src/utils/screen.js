import { Dimensions } from 'react-native'

export const wp = percent => {
  const width = Dimensions.get('window').width
  return (percent * width) / 100
}

export const hp = percent => {
  const height = Dimensions.get('window').height
  return (percent * height) / 100
}