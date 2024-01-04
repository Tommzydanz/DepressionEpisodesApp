import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IDepressiveEpisodesParamList} from '../../navigation/interfaces';

export type SymptomQuestion = {
  ID: number;
  Symptom: string;
  Question: string;
};

export type SymptomQuestionsProp = React.FC<
  StackScreenProps<IDepressiveEpisodesParamList, 'SymptomQuestions'> & {
    data: SymptomQuestion[];
    onAnswer: (questionId: number, answer: string) => void;
  }
>;
