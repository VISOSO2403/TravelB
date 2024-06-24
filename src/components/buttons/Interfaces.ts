import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface Button {
  children: ReactNode
  onPress: () => void
  styles?: StyleProp<ViewStyle>
}

export interface FabProps {
  iconName: string
  iconSize?: number
  onPress: () => void
  backgroundColor?: string
  styles?: StyleProp<ViewStyle>
}
