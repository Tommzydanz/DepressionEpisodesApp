import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import {SymptomQuestionsProp} from './interfaces';
import {QUESTIONNAIRE} from '../../data/questionnaire';
import Button from '../../components/Button/Button';
import {DISEASES} from '../../data/diseases';

const {width} = Dimensions.get('window');

const SymptomQuestions: SymptomQuestionsProp = function SymptomQuestions({
  data,
  onAnswer,
  navigation,
}) {
  const diseases = DISEASES;
  data = QUESTIONNAIRE;
  const [currentSymptomQuestionIndex, setCurrentSymptomQuestionIndex] =
    useState<number>(0);
  // Using useState to keep track of matched diseases
  const [matchedDiseases, setMatchedDiseases] = useState<string[]>([]);

  const handleAnswer = useCallback(
    (questionId: number, answer: string) => {
      setCurrentSymptomQuestionIndex(currentSymptomQuestionIndex + 1);

      const foundDiseases: string[] = [];

      // Find the symptom associated with the current question
      const symptom = QUESTIONNAIRE.find(q => q.ID === questionId)?.Symptom;

      if (answer === 'Yes' && symptom) {
        // Check each disease to see if the symptom is part of it
        for (const disease in diseases) {
          if (
            diseases[disease].symptoms.includes(symptom) &&
            !matchedDiseases.includes(diseases[disease].disease)
          ) {
            foundDiseases.push(diseases[disease].disease);
          }
        }

        if (foundDiseases.length > 0) {
          setMatchedDiseases(prevDiseases => [
            ...prevDiseases,
            ...foundDiseases,
          ]);
          console.log(matchedDiseases);
        }
      }

      if (currentSymptomQuestionIndex >= data.length - 1) {
        return;
      }
      console.log(`Answer to question ID ${questionId}: ${answer}`);
    },
    [currentSymptomQuestionIndex, data.length, diseases, matchedDiseases],
  );

  useEffect(
    function componentDidMount() {
      if (currentSymptomQuestionIndex >= data.length - 1) {
        navigation.replace('PossibleDiseases', {
          possibleDiseases: matchedDiseases,
        });
      }
    },
    [currentSymptomQuestionIndex, data.length, matchedDiseases, navigation],
  );

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.container}>
      <Text style={styles.screenTitle}>Questions</Text>
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        {data.map((question, index) => {
          if (index === currentSymptomQuestionIndex) {
            return (
              <View style={[styles.questionContainer]} key={question.ID}>
                <View style={styles.counterContainer}>
                  <Image
                    source={require('../../assets/images/question.png')}
                    style={{marginHorizontal: 4, justifyContent: 'center'}}
                  />
                  <Text style={styles.counterText}>{index + 1}</Text>
                  <Text style={styles.counterLastIndexText}>
                    {' '}
                    / {data.length}
                  </Text>
                </View>
                <Text style={styles.questionText}>{question.Question}</Text>
              </View>
            );
          }
        })}
      </View>
      <View style={styles.answerContainer}>
        <Button
          style={styles.noButton}
          onPress={() =>
            handleAnswer(data[currentSymptomQuestionIndex].ID, 'No')
          }>
          {' '}
          No
        </Button>
        <Button
          style={styles.yesButton}
          onPress={() =>
            handleAnswer(data[currentSymptomQuestionIndex].ID, 'Yes')
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
    paddingTop: 28,
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
    borderRadius: 20,
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
    marginBottom: 100,
  },
  noButton: {
    backgroundColor: '#363F55',
    width: 150,
    borderRadius: 12,
  },
  yesButton: {
    backgroundColor: '#28C7AC',
    width: 150,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff', // white color for the text
  },
});

export default SymptomQuestions;
