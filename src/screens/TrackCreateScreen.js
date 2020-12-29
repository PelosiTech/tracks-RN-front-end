import './_mockLocation';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet} from "react-native";
import {Text} from 'react-native-elements'
import Map from "../components/Map";
import {SafeAreaView} from "react-native-safe-area-context";
import { requestPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, [])

    return (
        <SafeAreaView forceInset={{top: "always"}}>
            <Text h2>Create a Track</Text>
            <Map/>
            {err ? <Text style={{fontSize:40, color: 'red'}}>Please enable location services</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({})

export default TrackCreateScreen;