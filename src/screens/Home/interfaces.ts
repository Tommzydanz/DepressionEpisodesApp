import React from "react";
import {StackScreenProps} from '@react-navigation/stack';
import { IDepressiveEpisodesParamList } from "../../navigation/interfaces";

export type HomeProp = React.FC<
    StackScreenProps<IDepressiveEpisodesParamList, 'Home'>
    >
