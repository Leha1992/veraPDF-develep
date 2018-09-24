import {connect} from 'react-redux';
import {togglePolicyActive} from '../../redux/modules/configuration/policy';
import Action from './Action';

const mapStateToProps = state => {
    return {
        checked: state.configuration.policy.active,
        title: "Perform Policy Checks",
        collapsible: false,
        children: null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleActive: () => {
            dispatch(togglePolicyActive());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);
