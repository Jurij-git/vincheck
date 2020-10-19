import React from 'react';
import {connect} from "react-redux";
import VinFormReduxForm from "./VinForm";
import {checkVin, checkVin2} from "./vinReducer";//thunk

let mapStateToProps = (state) => {
    return{
        vinNumber: state.vinPage.vinNumber,
        vinData: state.vinPage.vinData
    }
}

//onSubmit just calls callbacked thunk
const onSubmit = (formData) => {
    debugger;
    //checkVin(formData); //thunk call
    checkVin2(formData); //thunk call
}

//const VinFormContainer = connect(mapStateToProps, {checkVin})(VinForm);
const VinFormContainer = connect(mapStateToProps, {onSubmit})(VinFormReduxForm);

export default VinFormContainer;