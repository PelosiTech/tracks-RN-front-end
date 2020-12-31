import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'reset':
            return {...state, name: '', locations: []}
        case 'change_name':
            return {...state, name: action.payload}
        case 'start_recording':
            return {...state, recording: true};
        case 'stop_recording':
            return {...state, recording: false};
        case 'add_current_location':
            if(state.recording) {
                return {
                    ...state,
                    locations: [...state.locations, action.payload],
                    currentLocation: action.payload
                };
            }
            return {...state, currentLocation: action.payload};
        case 'add_location':
            return {...state, locations: [...state.locations, action.payload]};
        default:
            return state;
    }
}

const reset = dispatch => () => {
    dispatch({type: 'reset'})
}
const changeName = dispatch => (name) => {
    dispatch({type: 'change_name', payload: name});
};

const startRecording = dispatch => () => {
    dispatch({type: 'start_recording'});
};
const stopRecording = dispatch => () => {
    dispatch({type: 'stop_recording'});
};
const addLocation = dispatch => (location) => {
    dispatch({type: 'add_current_location', payload: location})
};

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation, changeName,reset},
    {name: '',recording: false, locations: [], currentLocation: null}
)

