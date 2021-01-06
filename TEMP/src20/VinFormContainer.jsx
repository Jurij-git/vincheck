//ok
// import React from 'react';
// import {connect} from "react-redux";
// import {checkVin, checkVin2} from "./vinReducer";//thunk
// import {compose} from "redux";
// import VinFormContainer2 from "./VinFormContainer2";
//
// class VinFormContainer extends React.Component{
//
//
//     render() {
//         return <VinFormContainer2 {...this.props}
//                         profile={this.props.vinPage}
//         />
//     }
// }
//
// let mapStateToProps = (state) => ({
//     vinNumber: state.vinPage.vinNumber,
//     vinData: state.vinPage.vinData
// });
//
// export default compose(
//     connect(mapStateToProps, {checkVin})
// )(VinFormContainer);

//neok
// import React from 'react';
// import {connect} from "react-redux";
// import VinFormReduxForm from "./VinForm";
// import {checkVin, checkVin2} from "./vinReducer";//thunk
//
// let mapStateToProps = (state) => {
//     return{
//         vinNumber: state.vinPage.vinNumber,
//         vinData: state.vinPage.vinData
//     }
// }
//
// //onSubmit just calls callbacked thunk
// const onSubmit = (formData) => {
//     debugger;
//     //checkVin(formData); //thunk call
//     checkVin2(formData); //thunk call
// }
//
// //const VinFormContainer = connect(mapStateToProps, {checkVin})(VinForm);
// const VinFormContainer = connect(mapStateToProps, {onSubmit})(VinFormReduxForm);
//
// export default VinFormContainer;

//neokstalokom
// import React from 'react';
// import {connect} from "react-redux";
// import VinFormReduxForm from "./VinForm";
// import {checkVin, checkVin2} from "./vinReducer";
// import VinFormContainer2 from "./VinFormContainer2";
// //thunk
//
// let mapStateToProps = (state) => {
//     return{
//         vinNumber: state.vinPage.vinNumber,
//         vinData: state.vinPage.vinData
//     }
// }
//
// //onSubmit just calls callbacked thunk
// // const onSubmit = (formData) => {
// //     debugger;
// //     checkVin(formData); //thunk call
// //     //checkVin2(formData); //thunk call
// // }
//
// const VinFormContainer = connect(mapStateToProps, {checkVin})(VinFormContainer2);
// //const VinFormContainer = connect(mapStateToProps, {})(VinFormContainer2);
//
// export default VinFormContainer;



import React from 'react';
import {connect} from "react-redux";
import VinFormReduxForm from "./VinForm";
import {checkVin, checkVin2} from "./vinReducer";
import VinFormContainer2 from "./VinFormContainer2";
//thunk

let mapStateToProps = (state) => {
    return{
        vinNumber: state.vinPage.vinNumber,
        vinData1: state.vinPage.vinData1,
        vinData2: state.vinPage.vinData2,
        vinData3: state.vinPage.vinData3
    }
}

//onSubmit just calls callbacked thunk
// const onSubmit = (formData) => {
//     debugger;
//     checkVin(formData); //thunk call
//     //checkVin2(formData); //thunk call
// }

const VinFormContainer = connect(mapStateToProps, {checkVin})(VinFormContainer2);
//const VinFormContainer = connect(mapStateToProps, {})(VinFormContainer2);

export default VinFormContainer;