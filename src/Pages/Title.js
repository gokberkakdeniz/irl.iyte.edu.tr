import Helmet from 'react-helmet';
import React from 'react'

export default class Title extends React.Component {
  websiteName = "IZTECH RoboLeague"
  delimeter = "—"

  render() {
    if (this.props.pageName) return (
      <Helmet>
        <title>{`${this.websiteName} ${this.delimeter} ${this.props.pageName}`}</title>
      </Helmet>
    )
  
    return (
      <Helmet>
        <title>{this.props.websiteName}</title>
      </Helmet>
    )
  }
}