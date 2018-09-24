import {connect} from 'react-redux';
import _ from 'lodash';

import SelectPDFButton from "./SelectPDFButton";
import {addFiles} from "../../redux/modules/filesToValidate";

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
    onSelect: fileList => {
        let files = _.chain(fileList)
            .keyBy('name')
            .mapValues(file => ({type: 'pdf'}))
            .value();
        dispatch(addFiles(files));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPDFButton);