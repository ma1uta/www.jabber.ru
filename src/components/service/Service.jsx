import React from 'react';
import {connect} from "react-redux";

class Service extends React.PureComponent {
    render() {
        return (
            <>
                Service page.
            </>
        );
    }
}

export default connect(() => ({}), () => ({}))(Service);
