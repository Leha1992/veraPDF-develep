import React from "react";
import { connect } from "react-redux";

import { toggleValidationActive } from "../../redux/modules/configuration/validation";
import ValidationAction from "./ValidationAction";
import Action from "./Action";

const mapStateToProps = state => {
  const {
    active,
    fixMetadata,
    profileFilePath,
    includeInformationInReport,
    stopValidation,
    amountFails,
    prefix
  } = state.configuration.validation;
  return {
    checked: active,
    title: "Validation",
    collapsible: true,
    children: (
      <ValidationAction
        profilePath={profileFilePath}
        prefix={prefix}
        amountFails={amountFails}
        includeInformation={includeInformationInReport}
        isFixMetadata={fixMetadata}
        stopValidation={stopValidation}
      />
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleActive: () => {
      dispatch(toggleValidationActive());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Action);
