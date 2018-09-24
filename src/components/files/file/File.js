import React from 'react';
import Proptypes from 'prop-types';
import MaterialIcon from 'material-icons-react';

import './File.css';

class File extends React.Component {
    render() {
        return (
            <div className="file">
                <MaterialIcon icon="insert_drive_file"/>
                <span className="path">{this.props.path}</span>
                <div className="del-btn" onClick={() => {this.props.onDel(this.props.path)}}>
                    <MaterialIcon icon="clear"/>
                </div>
            </div>
        );
    }
}

File.propTypes = {
    path: Proptypes.string.isRequired,
    onDel: Proptypes.func
};

export default File;