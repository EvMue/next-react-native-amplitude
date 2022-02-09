import { Amplitude } from '@amplitude/react-native'

export function getInstance() {
  const ampInstance = Amplitude.getInstance()
  return ampInstance
}
