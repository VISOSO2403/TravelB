import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface Screen {
  children: ReactNode;
  isScroll?: boolean;
  styles?: StyleProp<ViewStyle>;
}

export interface Section {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

export interface Row {
  children: ReactNode,
  styles?: StyleProp<ViewStyle>,
  isCenter?: boolean
}
