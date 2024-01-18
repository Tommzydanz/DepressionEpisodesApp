import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IDepressiveEpisodesParamList} from '../../navigation/interfaces';

export type PossibleDiseasesProp = React.FC<
  StackScreenProps<IDepressiveEpisodesParamList, 'PossibleDiseases'>
>;
