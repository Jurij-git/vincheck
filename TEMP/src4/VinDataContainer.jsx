import React from 'react';
import {connect} from "react-redux";
import VinData from "./VinData";

let mapStateToProps = (state) => {
    return{
        vinNumber: state.vinPage.vinNumber,
        vinData: state.vinPage.vinData
    }
}

const VinDataContainer = connect(mapStateToProps, {})(VinData);

export default VinDataContainer;