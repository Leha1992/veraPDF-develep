import {createAction, handleActions} from 'redux-actions';

//- Actions
export const togglePolicyActive = createAction('POLICY_ACTIVE_TOGGLE');

//- State
const initialState = {
    active: false
};

//- Reducers
export default handleActions({
    POLICY_ACTIVE_TOGGLE: (state) => {
        return {...state, active: !state.active};
    }
}, initialState);