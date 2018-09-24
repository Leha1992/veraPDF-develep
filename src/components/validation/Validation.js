import React from 'react';
import ValidationAction from '../action/ValidationAction.container';
import FeaturesAction from '../action/FeaturesAction.container';
import PolicyAction from '../action/PolicyAction.container';
import SelectedFiles from '../files/SelectedFiles.container';

import './Validation.css';

class Validation extends React.Component {
    render() {
        return (
            <div className="validation">
                <SelectedFiles/>
                <h5>What should veraPDF do for you?</h5>
                <ValidationAction/>
                <FeaturesAction/>
                <PolicyAction/>
            </div>
        );
    }
}

export default Validation;