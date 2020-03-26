import React from 'react'

const validParameters = [
  "q", "mapType", "center", "zoom", "center", "origin", 
  "destination", "avoid", "waypoints", "mode", "avoid", 
  "units", "location", "heading", "pitch", "fov", "language", 
  "region", "radius", "source"
]

export default class Map extends React.Component {
  render() {
    const iframeProps = { ...this.props };
    
    delete iframeProps.mode;

    const urlBuilder = [
      "https://www.google.com/maps/embed/v1/",
      this.props.mode,
      "?key=",
      process.env.REACT_APP_GOOGLE_API_KEY
    ];

    validParameters.forEach(p => {
      if (iframeProps[p] !== undefined) {
        urlBuilder.push("&")
        urlBuilder.push(p.toLowerCase())
        urlBuilder.push("=")
        urlBuilder.push(iframeProps[p])
      }
      delete iframeProps[p];
    });

    iframeProps.src = urlBuilder.join("")

    // eslint-disable-next-line
    return <iframe { ...iframeProps }></iframe>;
  }
}