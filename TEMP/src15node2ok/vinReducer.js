import {vinCheckAPI} from "./api/api";

const SET_VIN_NUMBER = 'SET-VIN-NUMBER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_VIN_DATA1 = 'SET-VIN-DATA1';
const SET_VIN_DATA2 = 'SET-VIN-DATA2';
const SET_VIN_DATA3 = 'SET-VIN-DATA3';

const SET_IMG_LINKS = 'SET-IMG-LINKS';

let initialState = {
    vinNumber: null,
    isFetching: false,  //preloader indicator
    vinData1: null,
    vinData2: null,
    vinData3: null,
    imgLinks: null
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case SET_VIN_DATA1: {
            return {
                ...state,   //copy state
                vinData1: action.vinData1  //update vin data
            }
        }
        case SET_VIN_DATA2: {
            return {
                ...state,   //copy state
                vinData2: action.vinData2   //update vin data
            }
        }
        case SET_VIN_DATA3: {
            return {
                ...state,   //copy state
                vinData3: action.vinData3   //update vin data
            }
        }

        case SET_IMG_LINKS: {
            return {
                ...state,   //copy state
                imgLinks: action.imgLinks   //update vin data
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

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export const setVinData1 = (vinData1) => {
    return {
        type: SET_VIN_DATA1,
        vinData1
    }
}

export const setVinData2 = (vinData2) => {
    return {
        type: SET_VIN_DATA2,
        vinData2
    }
}

export const setVinData3 = (vinData3) => {
    return {
        type: SET_VIN_DATA3,
        vinData3
    }
}

export const setImgLinks = (imgLinks) => {
    return {
        type: SET_IMG_LINKS,
        imgLinks
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

    //debugger;
    let a = 4;
    let b = a;

    dispatch(setVinNumber(vinNumber));
    //dispatch(setVinData(response));

    dispatch(toggleIsFetching(true));
    //
    // let response11 = await vinCheckAPI.getVinData11(vinNumber.vinNumber);
    // let response12 = await vinCheckAPI.getVinData12(vinNumber.vinNumber);
    // let response13 = await vinCheckAPI.getVinData13(vinNumber.vinNumber);
    // let response14 = await vinCheckAPI.getVinData14(vinNumber.vinNumber);

    let response2 = await vinCheckAPI.getVinData2(vinNumber.vinNumber);
    let response3 = await vinCheckAPI.getVinData3(vinNumber.vinNumber);


    let responseNode1 = await vinCheckAPI.getVinDataNode1(vinNumber.vinNumber);
    let responseNode2 = await vinCheckAPI.getVinDataNode2(responseNode1.data);

    console.log(responseNode1);
    console.log(responseNode2);

    var linksArray = [];

    if (responseNode2.data.lotImages !== undefined){
        for(var i=0; i<responseNode2.data.lotImages.length; i++){

            for(var j=0; j<responseNode2.data.lotImages[i].link.length; j++){
                linksArray.push(responseNode2.data.lotImages[i].link[j].url);
            }


        }
    }

    console.log(linksArray);

    //debugger;

    // if (response1.data.resultCode === 0) {
         //dispatch(setVinData1(response1));
    // }
    //if (response2.data.resultCode === 0) {
        dispatch(setVinData2(response2.data));
        // dispatch(setVinData2({test: true, data: "string"}));
    //}
    //if (response3.data.resultCode === 0) {
        dispatch(setVinData3(response3.data));
    //}

    dispatch(setImgLinks(linksArray));

    //debugger;
    dispatch(toggleIsFetching(false));

    // const userId = getState().auth.userId;
    // let response = await vinCheckAPI.getVinData(profile);
    // if (response.data.resultCode === 0) {
    //    //server does not return data in this case, so we get manually
    //    dispatch(getUserProfile(userId));
    // } else{
    //    dispatch(stopSubmit("edit-vin", {_error: response.data.messages[0]}));
    //    return Promise.reject(response.data.messages[0]);
    // }
}

export default vinReducer;