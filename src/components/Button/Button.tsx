import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {IButtonProps} from './interfaces';

const Button: IButtonProps = function Button({children, onPress, style}) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={onPress}
        style={({pressed}) =>
          pressed
            ? [
                styles.pressed,
                styles.buttonContainer,
              ]
            : [styles.buttonContainer, {backgroundColor: '#4545EE' }]
        }
        android_ripple={{color: '#F3F3F3'}}>
        <Text style={[styles.buttonText, {color: 'white'}, style]}>
          {children}
        </Text>
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
  },
  buttonText: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});