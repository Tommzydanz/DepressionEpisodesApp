import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import Button from '../../components/Button/Button';
import {HomeProp} from './interfaces';

const Home: HomeProp = function Home({navigation}) {
  const startEpisodes = React.useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SymptomQuestions'}],
      }),
    );
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Welcome ALABA</Text>
        <Text style={styles.symptomText}>
          Select the symptoms that you are facing
        </Text>
      </View>
      <Image
        source={require('../../assets/images/depressive_img.png')}
        style={styles.image}
      />
      <Button style={styles.startButton} onPress={startEpisodes}>
        Start
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    color: 'white',
  },
  headerContainer: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  welcomeText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'MonaSans-SemiBold',
  },
  symptomText: {
    color: 'black',
    fontFamily: 'MonaSans-Light',
    fontSize: 14,
    fontWeight: '500',
  },
  image: {
    marginVertical: 54,
    width: 354,
    height: 354,
    resizeMode: 'cover',
  },
  startButton: {
    fontWeight: 'bold',
  },
});
