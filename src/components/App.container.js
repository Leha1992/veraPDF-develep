import {connect} from 'react-redux';
import _ from 'lodash';

import App from './App';
import {getFilesToValidate} from '../redux/modules/filesToValidate';

export const mapStateToProps = state => ({
    view: _.size(getFilesToValidate(state)) === 0 ? 'HOME' : 'VALIDATION'
});

export default connect(mapStateToProps)(App);