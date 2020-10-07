import React, { FC } from "react";

import "./track-info.scss";
import IGeoInfo from "../../interfaces/IGeoInfo";

type TrackInfoProps = {
  geo: IGeoInfo;
};

const TrackInfo: FC<TrackInfoProps> = ({ geo }) => {
  return (
    <article className="track-info">
      <ul className="ip-address">
        <h3 className="sm-title">IP Address</h3>
        <li>{geo.ip ? `${geo.ip}` : "Nothing yet..."}</li>
      </ul>
      <ul className="location">
        <h3 className="sm-title">Location</h3>
        <li>
          {geo.ip
            ? `${geo.location.country} - ${geo.location.region}, ${geo.location.city}`
            : "Nothing yet..."}
        </li>
      </ul>
      <ul className="lat-lng">
        <h3 className="sm-title">Lat, Lng</h3>
        <li>
          {geo.ip
            ? `${geo.location.lat}, ${geo.location.lng}`
            : "Nothing yet..."}
        </li>
      </ul>
      <ul className="isp">
        <h3 className="sm-title">ISP</h3>
        <li>{geo.ip ? `${geo.isp}` : "Nothing yet..."}</li>
      </ul>
    </article>
  );
};

export default TrackInfo;
