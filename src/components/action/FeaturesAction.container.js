import {connect} from 'react-redux';
import {toggleFeaturesActive} from '../../redux/modules/configuration/features';
import Action from './Action';

const mapStateToProps = state => {
    return {
        checked: state.configuration.features.active,
        title: "Extract Features",
        collapsible: true,
        children: null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleActive: () => {
            dispatch(toggleFeaturesActive());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);
