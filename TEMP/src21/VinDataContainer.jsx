import React from 'react';
import {connect} from "react-redux";
import VinData from "./VinData";

let mapStateToProps = (state) => {
    return{
        vinNumber: state.vinPage.vinNumber,
        isFetching: state.vinPage.isFetching,
        vinData1: state.vinPage.vinData1,
        vinData2: state.vinPage.vinData2,
        vinData3: state.vinPage.vinData3,
        dataArray: state.vinPage.dataArray,
        imgLinks: state.vinPage.imgLinks
    }
}

const VinDataContainer = connect(mapStateToProps, {})(VinData);

export default VinDataContainer;