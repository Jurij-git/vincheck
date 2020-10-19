//import {vinCheckAPI} from "./api/api";

const SET_VIN_NUMBER = 'SET-VIN-NUMBER';
const SET_VIN_DATA = 'SET-VIN-DATA';

let initialState = {
    vinNumber: null,
    vinData: null
};

const vinReducer = (state = initialState, action) => {
    //debugger;
    switch (action.type) {
        case SET_VIN_NUMBER: {
            return {
                ...state,   //copy state
                vinNumber: action.vinNumber   //update input vin
            }
        }
        case SET_VIN_DATA: {
            return {
                ...state,   //copy state
                vinData: action.vinData   //update vin data
            }
        }
        default:
            return state;
    }
}

export const setVinNumber = (vinNumber) => {
    return {
        type: SET_VIN_NUMBER,
        vinNumber
    }
}

export const setVinData = (vinData) => {
    return {
        type: SET_VIN_DATA,
        vinData
    }
}


// export const checkVin2 = (vinNumber) => async (dispatch, getState) => {
//     debugger;
//     dispatch(setVinNumber(vinNumber));
//
//     let a = 4;
//     let b = a;
// }

//thunk to call some dispatches
export const checkVin = (vinNumber) => async (dispatch, getState) => {

    debugger;
    dispatch(setVinNumber(vinNumber));

    let a = 4;
    let b = a;

    // let response = await vinCheckAPI.getVinData(vinNumber);
    //
    // if (response.data.resultCode === 0) {
    //     dispatch(setVinNumber(vinNumber));
    //     dispatch(setVinData(response));
    // }

    //const userId = getState().auth.userId;
    //let response = await vinCheckAPI.getVinData(profile);
    //if (response.data.resultCode === 0) {
    //    //server does not return data in this case, so we get manually
    //    dispatch(getUserProfile(userId));
    //} else{
    //    dispatch(stopSubmit("edit-vin", {_error: response.data.messages[0]}));
    //    return Promise.reject(response.data.messages[0]);
    //}
}

export default vinReducer;