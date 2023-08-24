import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import SymptomList from "../screens/SymptomList/SymptomList";
import SymptomChecker from "../screens/SymptomChecker/SymptomChecker";
import PossibleDiseases from "../screens/PossibleDiseases/PossibleDiseases";
import DetailedEpisodeInfo from "../screens/DetailedEpisodeInfo/DetailedEpisodeInfo";
import { IDepressiveEpisodesParamList } from "./interfaces";


const DepressiveEpisodeStack = function DepressiveEpisodeStack() {
    const Stack = createStackNavigator<IDepressiveEpisodesParamList>();

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="SymptomList" component={SymptomList} />
            <Stack.Screen name="SymptomChecker" component={SymptomChecker}/>
            <Stack.Screen name="PossibleDiseases" component={PossibleDiseases}/>
            <Stack.Screen name="DetailedEpisodeInfo" component={DetailedEpisodeInfo}/>
        </Stack.Navigator>
    );
}

export default DepressiveEpisodeStack;