import {combineReducers} from 'redux';
import configuration from './configuration';
import filesToValidate from './filesToValidate';

export const rootReducer = combineReducers({
    configuration,
    filesToValidate
});