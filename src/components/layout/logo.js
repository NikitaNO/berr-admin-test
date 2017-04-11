import React from 'react';
export default class Logo extends React.Component {
  render() {
    return(
      <div className="logo-wrapper" style={this.props.style}>
        <p style={this.props.textStyleLogo}>Logo</p>
      </div>
    )
  }
}
