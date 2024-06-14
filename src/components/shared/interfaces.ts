import { StyleProp, ViewStyle } from "react-native";


export interface CustomInputProps {
  placeholder: string;
  onChangeText?: (text: string) => string;
  secureTextEntry?: boolean;
  message?: string 
}

export interface customIconProps {
  name: any;
  size?: number;
  color?: string;
  styles?: StyleProp<ViewStyle>
}
