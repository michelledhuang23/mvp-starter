import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../styles/MapStyles.js';

const AnyReactComponent = ({ text }) => (
  <Marker>
    {text}
  </Marker>
);

class Map extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      center: {lat: 59.95, lng: 30.33},
      zoom: 0
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '85vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD5pUlh2DoyljEvdnEdfnHDcJct2mLTK2A"}}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;