import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
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

  const handleAnswer = useCallback(
    (questionId: number, answer: string) => {
      console.log(`Answer to question ID ${questionId}: ${answer}`);

      setCurrentSymptomQuestionIndex(currentSymptomQuestionIndex + 1);
    },
    [currentSymptomQuestionIndex],
  );

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.container}>
      <Text style={styles.screenTitle}>Questions</Text>
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        {allQuestions.map((question, index) => {
          if (index === currentSymptomQuestionIndex) {
            return (
              <Animated.View
                style={[styles.questionContainer]}
                key={question.ID}>
                <View style={styles.counterContainer}>
                  <Text style={styles.counterText}>{index + 1}</Text>
                  <Text style={styles.counterLastIndexText}>
                    {' '}
                    / {allQuestions.length}
                  </Text>
                </View>
                <Text style={styles.questionText}>{question.Question}</Text>
              </Animated.View>
            );
          }
        })}
      </View>
      <View style={styles.answerContainer}>
        <Button
          style={styles.noButton}
          onPress={() =>
            handleAnswer(allQuestions[currentSymptomQuestionIndex].ID, 'No')
          }>
          {' '}
          No
        </Button>
        <Button
          style={styles.yesButton}
          onPress={() =>
            handleAnswer(allQuestions[currentSymptomQuestionIndex].ID, 'Yes')
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
    marginBottom: 23,
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
    marginTop: 56,
    marginBottom: 10,
    height: 400,
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 22,
  },
  questionText: {
    fontSize: 28,
    lineHeight: 54,
    marginBottom: 120,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
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
