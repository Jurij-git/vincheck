import React from "react";
import {createField, Input, Textarea} from "./FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {required} from "./utils/validators/validators";
import style from "./FormsControls/FormsControls.module.css";
// import {
//     required,
//     validateAddress,
//     validateEmail,
//     validateName,
//     validateNpi,
//     validatePhone
// } from "./utils/validators/validators";



const VinForm = ({handleSubmit, vinNumber, error}) => {
    //debugger;

    return <form onSubmit={handleSubmit}>
        {
            error &&
            <div className={style.formSummaryError}>
                {error}
            </div>
        }

        <div>
            <b>Please Enter Vin Number</b>: {createField("Vin Number", "vinNumber", [required], Input)}
        </div>

        <div><button>Check</button></div>
    </form>
}

const VinFormReduxForm = reduxForm({form: 'edit-vin'})(VinForm);

export default VinFormReduxForm;