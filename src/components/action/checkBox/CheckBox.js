import React from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from "prop-types";

import "./CheckBox.css";

class CheckBox extends React.Component {
    render() {
        let checkBox = this.props.checked ? "check_box" : "check_box_outline_blank";

        return (
            <div className="check-box-container">
                <div className="check-box" onClick={this.props.onChange}>
                    <MaterialIcon icon={checkBox}/>
                </div>
                <div className="title">{this.props.title}</div>
            </div>
        );
    }
}

CheckBox.propTypes = {
    checked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CheckBox;