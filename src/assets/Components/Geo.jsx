import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3032.1252369924064!2d72.8008406!3d40.5388222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac01ce44614d%3A0xd3ad4ab952424d2a!2z0KDQsNC80LDQt9Cw0L0!5e0!3m2!1sru!2skg!4v1690449504480!5m2!1sru!2skg" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
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



// <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3032.1252369924064!2d72.8008406!3d40.5388222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdac01ce44614d%3A0xd3ad4ab952424d2a!2z0KDQsNC80LDQt9Cw0L0!5e0!3m2!1sru!2skg!4v1690449504480!5m2!1sru!2skg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>