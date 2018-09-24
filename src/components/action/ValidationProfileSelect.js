import React, { Component } from "react";

import "./ValidationProfileSelect.css";

class ValidationProfileSelect extends Component {
  render() {
    const { getInputValue } = this.props;
    return (
      <select
        onChange={e => getInputValue(e.target.value)}
        className="validation-profile-select"
      >
        <option value="custom">Custom</option>
        <option value="auto-detction">Auto-detection</option>
        <option value="pdf/a-1a">PDF/A-1a</option>
        <option value="pdf/a-1b">PDF/A-1b</option>
        <option value="pdf/a-2a">PDF/A-2a</option>
        <option value="pdf/a-2b">PDF/A-2b</option>
        <option value="pdf/a-2u">PDF/A-2u</option>
        <option value="pdf/a-3a">PDF/A-3a</option>
        <option value="pdf/a-3b">PDF/A-3b</option>
        <option value="pdf/a-3u">PDF/A-3u</option>
      </select>
    );
  }
}

export default ValidationProfileSelect;
