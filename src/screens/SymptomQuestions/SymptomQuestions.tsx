import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Animated,
} from 'react-native';
import {SymptomQuestionsProp} from './interfaces';
import {QUESTIONNAIRE} from '../../data/questionnaire';
import Button from '../../components/Button/Button';

const {width} = Dimensions.get('window');

const SymptomQuestions: SymptomQuestionsProp = function SymptomQuestions({
  data,
  onAnswer,
  navigation,
}) {
  data = QUESTIONNAIRE;

  const allQuestions = data;
  const [currentSymptomQuestionIndex, setCurrentSymptomQuestionIndex] =
    useState<number>(0);
  const [fadeAnim] = useState(new Animated.Value(1)); // Initial opacity for the card

  const handleAnswer = useCallback(
    answer => {
      // Animate card out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        // Update question index and reset animation
        setCurrentSymptomQuestionIndex(currentSymptomQuestionIndex + 1);
        fadeAnim.setValue(1);
      });
    },
    [currentSymptomQuestionIndex, fadeAnim],
  );
  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.container}>
      <Text style={styles.screenTitle}>Questions</Text>
      <View style={styles.questionContainer}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>
            {currentSymptomQuestionIndex + 1}
          </Text>
          <Text style={styles.counterLastIndexText}>
            {' '}
            / {allQuestions.length}
          </Text>
        </View>
        <Text style={styles.questionText}>
          {allQuestions[currentSymptomQuestionIndex]?.Question}
        </Text>
      </View>
      <View style={styles.answerContainer}>
        <Button style={styles.noButton} onPress={() => onAnswer('No')}>
          {' '}
          No
        </Button>
        <Button
          style={styles.yesButton}
          onPress={() =>
            onAnswer('Yes', allQuestions[currentSymptomQuestionIndex]?.Question)
          }>
          {' '}
          Yes
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    // or any color that fits the background of your app
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 24,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 10,
    backgroundColor: '#F1F1F1',
    borderRadius: 15,
  },
  counterText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.6,
    marginRight: 2,
  },
  counterLastIndexText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.6,
  },
  questionContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 20,
    marginHorizontal: 12,
  },
  questionText: {
    fontSize: 28,
    lineHeight: 54,
    marginBottom: 120,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  answerContainer: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginBottom: 150,
  },
  noButton: {
    backgroundColor: '#363F55',
    width: 150,
    borderRadius: 12,
  },
  yesButton: {
    backgroundColor: '#4CAF50',
    width: 150,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff', // white color for the text
  },
});

export default SymptomQuestions;
