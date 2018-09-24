import {combineReducers} from 'redux';
import validation from './validation';
import policy from './policy';
import features from './features';

export default combineReducers({
    validation,
    policy,
    features
});