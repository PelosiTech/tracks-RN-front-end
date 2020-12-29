import React from 'react';
import { View, StyleSheet} from "react-native";
import {Text} from 'react-native-elements'
import Map from "../components/Map";
import {SafeAreaView} from "react-native-safe-area-context";

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{top: "always"}}>
            <Text h2>Create a Track</Text>
            <Map/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({})

export default TrackCreateScreen;