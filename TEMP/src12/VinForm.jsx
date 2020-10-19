import React from "react";
import {createField, Input, Textarea} from "./FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {maxLength17, minLength17, required} from "./utils/validators/validators";
import style from "./VinForm.module.css";
// import {
//     required,
//     validateAddress,
//     validateEmail,
//     validateName,
//     validateNpi,
//     validatePhone
// } from "./utils/validators/validators";
import s from "./VinForm.module.css";


const VinForm = ({handleSubmit, vinNumber, error}) => {
    //debugger;

    return <form onSubmit={handleSubmit}>

        {/*{*/}
        {/*    error &&*/}
        {/*    <div className={style.formSummaryError}>*/}
        {/*        {error}*/}
        {/*    </div>*/}
        {/*}*/}

        <div className={style.wrapper}>
            <div className={style.registration_form}>
                <div className={style.title}>
                    Please Enter Vin Number:
                </div>
                <div className={style.form_wrap}>


                    <div className={style.input_wrap}>
                        {/*<label>Vin</label>*/}
                        {createField("Vin Number", "vinNumber", [required, maxLength17, minLength17], Input)}
                    </div>

                    <div className={style.input_wrap}>
                        <button className={style.submit_btn}>Check</button>
                    </div>

                </div>
            </div>
        </div>
    </form>
}

const VinFormReduxForm = reduxForm({form: 'edit-vin'})(VinForm);

export default VinFormReduxForm;