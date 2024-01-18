import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
} from 'react-native';
import {PossibleDiseasesProp} from './interfaces';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

const PossibleDiseases: PossibleDiseasesProp = function PossibleDiseases({
  route,
}) {
  const foundDiseases = route.params.possibleDiseases;

  return (
    <ImageBackground
      source={require('../../assets/images/background_2.png')}
      style={styles.container}>
      <Text style={styles.screenTitle}>Possible Diseases</Text>
      <Text style={styles.subTitle}>
        Below are the possible diseases your client might be facing
      </Text>
      <FlatList
        style={{marginHorizontal: 24, flex: 1}}
        data={foundDiseases}
        renderItem={({item, index}) => {
          return (
            <View key={index.toString()} style={styles.diseaseLabelContainer}>
              <TouchableOpacity
                onPress={() => {
                  console.log('Pressed');
                }}
                style={styles.diseaseCardContainer}>
                <Text style={styles.diseaseLabel}>{item}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()} // Using index as key
      />
    </ImageBackground>
  );
};

export default PossibleDiseases;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
    marginBottom: 23,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 24,
  },
  subTitle: {
    paddingTop: 28,
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 24,
  },
  diseaseLabelContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  diseaseCardContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    width: width - 50,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderBottomWidth: 5,
    borderBottomColor: '#026f5b',
    height: 58,
  },
  diseaseLabel: {
    color: 'black',
    fontSize: 16,
  },
});
