import React, { FC } from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import IGeoInfo from "../../interfaces/IGeoInfo";

import "./track-map.scss";

type TrackMapProps = {
  geo: IGeoInfo;
};

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoic3R5bGVzc2giLCJhIjoiY2tmdWI2cTV0MGhsczJ4bzhxamVkZ2VqdSJ9.6NyS2-Tj69tIieR6tszm5Q",
});

const TrackMap: FC<TrackMapProps> = ({ geo }) => {
  return (
    <Map
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/streets-v11"
      center={
        geo.ip
          ? [geo.location.lng, geo.location.lat]
          : [-0.481747846041145, 51.3233379650232]
      }
      zoom={[12]}
      containerStyle={{
        width: "100%",
        height: "100%",
      }}
    >
      <Marker
        coordinates={
          geo.ip
            ? [geo.location.lng, geo.location.lat]
            : [-0.481747846041145, 51.3233379650232]
        }
        anchor="bottom"
      >
        <img src="/assets/location-pin.png" alt="map marker" />
      </Marker>
    </Map>
  );
};

export default TrackMap;
