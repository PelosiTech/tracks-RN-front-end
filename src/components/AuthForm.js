import React, {useState} from 'react';
import {View, StyleSheet} from "react-native";
import {Text, Button, Input} from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ header, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Text h3>{header}</Text>
            </Spacer>
            <Input
                label='Email'
                value={email}
                onChangeText={(newEmail) => {setEmail(newEmail)}}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer/>
            <Input
                secureTextEntry={true}
                label='Password'
                value={password}
                onChangeText={(newPassword) => {setPassword(newPassword)}}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({email, password})}/>
            </Spacer>
        </>
    );
};

const styles = StyleSheet.create({});

export default AuthForm;