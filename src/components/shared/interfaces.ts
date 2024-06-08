

export interface CustomInputProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  // Add any other props you want to accept
  [propName: string]: any;
}
