import React from 'react';
import {connect} from "react-redux";
import VinData from "./VinData";
import {checkVin} from "./vinReducer";
import VinFormReduxForm from "./VinForm";

const VinFormContainer2 = (props) =>{



    //onSubmit is just calling thunk
    const onSubmit = (formData) => {
        //debugger;
        props.checkVin(formData);

    }

    return (
        <VinFormReduxForm onSubmit={onSubmit}/>
    )
}

export default VinFormContainer2;