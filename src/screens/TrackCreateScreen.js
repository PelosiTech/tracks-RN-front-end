import './_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet} from "react-native";
import {Text} from 'react-native-elements'
import {withNavigationFocus} from "react-navigation";
import Map from "../components/Map";
import {SafeAreaView} from "react-native-safe-area-context";
import {Context as LocationContext } from '../context/LocationContext';
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from '@expo/vector-icons';


const TrackCreateScreen = ({ isFocused }) => {
    const {state: { recording }, addLocation} = useContext(LocationContext)
    const [err] = useLocation(isFocused || recording,(location) => addLocation(location));

    return (
        <SafeAreaView forceInset={{top: "always"}}>
            <Text h2>Create a Track</Text>
            <Map/>
            {err ? <Text style={{fontSize:40, color: 'red'}}>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />,
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen);