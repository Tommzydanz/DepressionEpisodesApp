import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import SymptomQuestions from '../screens/SymptomQuestions/SymptomQuestions';
import SymptomChecker from '../screens/SymptomChecker/SymptomChecker';
import PossibleDiseases from '../screens/PossibleDiseases/PossibleDiseases';
import DetailedEpisodeInfo from '../screens/DetailedEpisodeInfo/DetailedEpisodeInfo';
import {IDepressiveEpisodesParamList} from './interfaces';
import {Image, Pressable} from 'react-native';

const DepressiveEpisodeStack = function DepressiveEpisodeStack() {
  const Stack = createStackNavigator<IDepressiveEpisodesParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="SymptomQuestions"
        component={SymptomQuestions}
        options={({navigation}) => ({
          headerTitle: 'Questions',
          headerRight: () => (
            <Pressable>
              <Image source={require('../assets/images/depressive_img.png')} />
            </Pressable>
          ),
          headerTitleStyle: {
            fontFamily: 'Roboto-Bold',
            textAlign: 'center',
          },
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen name="SymptomChecker" component={SymptomChecker} />
      <Stack.Screen name="PossibleDiseases" component={PossibleDiseases} />
      <Stack.Screen
        name="DetailedEpisodeInfo"
        component={DetailedEpisodeInfo}
      />
    </Stack.Navigator>
  );
};

export default DepressiveEpisodeStack;
