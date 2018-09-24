import {createAction, handleActions} from 'redux-actions';

//- Actions
export const toggleFeaturesActive = createAction('FEATURES_ACTIVE_TOGGLE');

//- State
const initialState = {
    active: false
};

//- Reducers
export default handleActions({
    FEATURES_ACTIVE_TOGGLE: (state) => {
        return {...state, active: !state.active};
    }
}, initialState);