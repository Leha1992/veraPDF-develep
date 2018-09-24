import {connect} from 'react-redux';

import {getFilesToValidate} from "../../redux/modules/filesToValidate";
import SelectedFiles from "./SelectedFiles";

export const mapStateToProps = state => ({
    files: getFilesToValidate(state)
});

export const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFiles);