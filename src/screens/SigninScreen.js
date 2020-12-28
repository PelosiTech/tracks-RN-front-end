import React, {useContext} from 'react';
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context as AuthContext} from "../context/AuthContext";

const SigninScreen = () => {
    const {state, signin} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText='Sign In to Your Account'
                errorMessage={state.errorMessage}
                onSubmit={({email, password}) => signin({email,password})}
                submitButtonText='Sign In'
            />
            <NavLink
                routeName='Signup'
                text='Dont have an account? Sign up instead!'
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
})

export default SigninScreen;