import { Amplitude } from '@amplitude/react-native'

export function getIn() {
  const ampInstance = Amplitude.getInstance()
  return ampInstance
}
