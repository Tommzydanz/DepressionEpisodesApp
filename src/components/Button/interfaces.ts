import React from 'react';
import { StyleProp } from 'react-native';

export type IButtonProps = React.FC<{
      style: StyleProp<any>;
      children: React.ReactNode;
      onPress: () => void;
    }
>;