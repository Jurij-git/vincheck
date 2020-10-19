import React from 'react';
import {connect} from "react-redux";
import {checkVin, checkVin2} from "./vinReducer";//thunk
import {compose} from "redux";
import VinFormContainer2 from "./VinDataContainer2";

class VinFormContainer extends React.Component{


    render() {
        return <VinFormContainer2 {...this.props}
                        profile={this.props.vinPage}
        />
    }
}

let mapStateToProps = (state) => ({
    vinNumber: state.vinPage.vinNumber,
    vinData: state.vinPage.vinData
});

export default compose(
    connect(mapStateToProps, {checkVin})
)(VinFormContainer);