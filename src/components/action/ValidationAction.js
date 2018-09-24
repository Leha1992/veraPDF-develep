import React, { Component } from "react";
import { connect } from "react-redux";

import CheckBox from "./checkBox/CheckBox";
import "./ValidationAction.css";
import ValidationProfileSelect from "./ValidationProfileSelect";

class ValidationAction extends Component {
  constructor(props) {
    super(props);

    this.fileInput = null;
  }

  openFile = () => {
    this.fileInput.click();
  };

  render() {
    const titleInformation =
      "include information on passed rules into the report";
    const {
      getValidationProfileValue,
      isFixMetadata,
      selectFixMetadata,
      profilePath,
      includeInformation,
      selectIncludeInformation,
      selectPrefix,
      stopValidation,
      amountFails,
      prefix,
      selectStopValidation,
      selectAmoutFails,
      getProfilePath
    } = this.props;
    return (
      <div>
        <span>ValidationProfile:</span>
        <ValidationProfileSelect getInputValue={getValidationProfileValue} />
        <input
          onChange={() => getProfilePath(this.fileInput.value)}
          className="input-file-hidden"
          type="file"
          ref={input => (this.fileInput = input)}
        />
        <input className="input-path" defaultValue={profilePath} type="text" />
        <button onClick={this.openFile} className="btn-browse">
          Browse
        </button>
        <div>
          <CheckBox
            checked={isFixMetadata}
            title="Fix metadata:"
            onChange={selectFixMetadata}
          />
        </div>
        <div>
          <span className="file-save-label">save fixed file to:</span>
          <input
            className="save-fixed-file"
            placeholder="Near source file"
            type="text"
          />
          <button className="btn-browse">Browse</button>
        </div>
        <div className="input-prefix-container">
          <span className="prefix-label">with prefix:</span>
          <input
            className="input-prefix-value"
            onChange={e => selectPrefix(e)}
            type="text"
            defaultValue={prefix}
          />
        </div>
        <CheckBox
          title={titleInformation}
          checked={includeInformation}
          onChange={selectIncludeInformation}
        />
        <div className="validation-checks-fail-container">
          <CheckBox
            checked={stopValidation}
            title="Stop validation after "
            onChange={selectStopValidation}
          />
          <input
            defaultValue={amountFails}
            onChange={e => selectAmoutFails(e)}
            className="failed-checks-input"
            type="number"
          />
          <span>failed checks</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.configuration.validation.profile
});

const mapDispathToProps = dispatch => ({
  getValidationProfileValue: value =>
    dispatch({ type: "SELECT_VALIDATION_PROFILE", payload: value }),
  selectFixMetadata: () => dispatch({ type: "SELECT_FIX_METADATA" }),
  selectIncludeInformation: () =>
    dispatch({ type: "SELECT_INCLUDE_INFORMATION" }),
  getProfilePath: path => dispatch({ type: "GET_PROFILE_PATH", payload: path }),
  selectStopValidation: () => dispatch({ type: "SELECT_STOP_VALIDATION" }),
  selectAmoutFails: e =>
    dispatch({ type: "SELECT_AMOUNT_FAILS", payload: e.target.value }),
  selectPrefix: e =>
    dispatch({ type: "SELECT_PREFIX", payload: e.target.value })
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ValidationAction);
