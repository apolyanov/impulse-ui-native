import { TextStyle, ViewStyle } from 'react-native';

export type ColorProps = {
  color?: TextStyle['color'];
  backgroundColor?: ViewStyle['backgroundColor'];
  opacity?: ViewStyle['opacity'];
};
