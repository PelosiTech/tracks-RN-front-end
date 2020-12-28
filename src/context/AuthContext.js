import { AsyncStorage } from 'react-native';
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch(action.type)  {
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})

            navigate('TrackList');
        } catch(err) {
            dispatch({type: 'add_error', payload: 'Something went wrong on sign up'})
        }
    }
}

const signin = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackerApi.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})

            navigate('TrackList');
        } catch(err) {
            dispatch({type: 'add_error', payload: 'Something went wrong on sign in'})
        }
    }
}

const signout = (dispatch) => {
    return () => {

    }
}

export const { Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage},
    {token: null, errorMessage: ''}
)

