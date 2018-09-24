import {connect} from 'react-redux';

import {delFile} from "../../../redux/modules/filesToValidate";
import File from "./File";

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
    onDel: (file) => {
        dispatch(delFile(file))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(File);