import { getInstance, setLibrary } from 'amplitude-js'
// here

export function getInstance() {
  const ampInstance = getInstance()
  ampInstance.setLibrary('next-react-native-amplitude', '1.0.0')
  return ampInstance
}
