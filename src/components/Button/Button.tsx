import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {IButtonProps} from './interfaces';

const Button: IButtonProps = function Button({children, onPress, style}) {
  return (
    <View style={[styles.rootContainer, style]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.buttonContainer]
            : [styles.buttonContainer, {backgroundColor: '#28C7AC'}, style]
        }
        android_ripple={{color: '#2b2a2a36'}}>
        <Text style={[styles.buttonText, {color: 'white'}]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: 10,
    width: '90%',
    height: 48,
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#ffffff00',
    shadowOpacity: 0.6,
    elevation: 1,
    shadowOffset: {width: 0, height: 6},
  },
  buttonText: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
