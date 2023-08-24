import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DepressiveEpisodeStack from './DepressiveEpisodesStack';

const AppNavigationContainer: React.FC<{}> = function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <DepressiveEpisodeStack/>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
