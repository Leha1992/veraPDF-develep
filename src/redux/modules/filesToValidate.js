import {createAction, handleActions} from 'redux-actions';
import _ from 'lodash';

//- Actions
export const addFiles = createAction('FILES_TO_VALIDATE_ADD', files => files);
export const delFile = createAction('FILE_TO_VALIDATE_DEL');

//- State
const initialState = {};

//- Reducers
export default handleActions({
    FILES_TO_VALIDATE_ADD: (state, action) => {
        return {
            ...state,
            ..._.mapValues(action.payload, file => ({...file, status: null}))
        };
    },
    FILE_TO_VALIDATE_DEL: (state, action) => {
        return {
            ..._.pick(state, _.keys(state).filter(file => (file !== action.payload)))
        };
    }
}, initialState);

//- Selector
export const getFilesToValidate = state => state.filesToValidate;