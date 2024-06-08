import {
  TextInput as NativeInput,
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import type {CustomInputProps} from './interfaces';
import TextComponent from './TextComponent';

const InputComponent = ({
  onChangeText,
  placeholder,
  ...props
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const handleFocus = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
  };

  const animatedLabel = (toValue: any) => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleTextChange = (text: any) => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (text) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const labelStyle = {
    left: 10,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [17, 0],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: ['gray', '#888'],
    }),
  };

  return (
    <View
      style={[
        styles.innerContainer,
        isFocused && {borderColor: '#63519f', borderWidth: 2},
      ]}>
      <Animated.Text style={[styles.label, labelStyle]}>
        {placeholder}
      </Animated.Text>
      <View style={styles.inputContainer}>
        <NativeInput
          {...props}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleTextChange}
          value={text}
          textAlignVertical="center"
          textContentType={props.secureTextEntry ? 'newPassword' : undefined}
          secureTextEntry={showPassword}
        />
        {props.secureTextEntry && !!text && (
          <View>
            <TouchableOpacity
              style={{width: 24}}
              onPress={() => setShowPassword(!showPassword)}>
              {!showPassword ? (
                <TextComponent text="eye" />
              ) : (
                <TextComponent text="eye-off" />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default InputComponent;

export const styles = StyleSheet.create({
  innerContainer: {
    borderWidth: 1,
    borderColor: '#908c94',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    marginVertical: 5,
  },
  label: {
    position: 'absolute',
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 40,
    marginTop: 10,
    paddingLeft: 10,
  },
});
