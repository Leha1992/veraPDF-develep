import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import {Collapse} from 'reactstrap';
import CheckBox from './checkBox/CheckBox';

import "./Action.css"

class Action extends React.Component {
    constructor(props) {
        super(props);

        this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.renderSettingsBtn = this.renderSettingsBtn.bind(this);
        this.state = {
            collapse: false
        };
    }

    toggleCollapse() {
        if (this.props.checked || !this.props.collapsible) {
            this.setState({
                collapse: !this.state.collapse
            });
        }
    }

    onCheckBoxChange() {
        if (this.props.checked && this.props.collapsible) {
            this.setState({
                collapse: false
            });
        }
        else {
            this.toggleCollapse();
        }

        this.props.onToggleActive();
    }

    render() {
        return (
            <div className="action">
                <CheckBox checked={this.props.checked} title={this.props.title} onChange={this.onCheckBoxChange}/>
                {this.renderSettingsBtn()}
                <Collapse isOpen={this.state.collapse}>
                    <div className="card">{this.props.children}</div>
                </Collapse>
            </div>
        );
    }

    renderSettingsBtn() {
        let btnClass = this.props.checked ? (this.state.collapse ? 'opened-btn' : 'closed-btn') : 'disabled-btn';

        if (this.props.collapsible) {
            return (
                <div className={btnClass} onClick={this.toggleCollapse}>
                    <MaterialIcon icon="settings"/>
                </div>
            );
        }
    }
}

Action.propTypes = {
    checked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    collapsible: PropTypes.bool.isRequired,
    children: PropTypes.object,
    onToggleActive: PropTypes.func.isRequired
};

export default Action;