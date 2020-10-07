import React, { FC, useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import TrackInfo from "components/TrackInfo";
import TrackMap from "components/TrackMap";
import Loading from "components/Loading";

import { scrollToRef, watchScroll } from "lib/scroll";

import { getOwnIp } from "api/ip";
import { getGeoInformation } from "api/geo";

import IGeoInfo from "../../interfaces/IGeoInfo";

import "./track.scss";

const Track: FC = () => {
  let map = useRef(null);
  let trackForm = useRef(null);

  const [ip, setIp] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [geo, setGeo] = useState<any>({});

  useEffect(() => {
    showAltForm();
  }, []);

  const showAltForm = () => {
    const form = trackForm.current as any;

    window.addEventListener("scroll", () => {
      const scroll: number = watchScroll();

      if (scroll >= window.innerHeight - 20) {
        form.classList.add("alt-form");
      } else {
        form.classList.remove("alt-form");
      }
    });
  };

  const executeScroll = () => scrollToRef(map);

  const validateInput = (): boolean => {
    const ipRegex = new RegExp(
        "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"
      ),
      domainRegex = new RegExp(
        "(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]"
      );

    if (ip.match(ipRegex)) return true;
    if (ip.match(domainRegex)) return true;

    if (ip.length < 0) return false;

    return false;
  };

  const setOwnIp = async () => {
    const ip = await getOwnIp();
    setIp(ip);
  };

  const getGeoInfo = async () => {
    if (validateInput()) {
      setLoading(true);
      const data: IGeoInfo = await getGeoInformation(ip);

      setGeo(data);
      setIp("");

      executeScroll();

      setLoading(false);
    } else {
      toast("Enter a valid ip or domain!");
    }
  };

  return (
    <main className="track">
      <article className="top">
        <ToastContainer
          toastClassName="toast"
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
        />

        <h1 className="md-title">View any ip address info!</h1>

        <form className="track-form" ref={trackForm}>
          <div className="track-input">
            <input
              type="text"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              placeholder="Enter an IP Adress or domain"
              className="md-body"
            />

            <span className="tip md-body" onClick={setOwnIp}>
              try with my own ip.
            </span>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();

              getGeoInfo();
            }}
          >
            <img src="/assets/search.svg" alt="search icon" />
          </button>
        </form>
      </article>

      <article className="tracker" ref={map}>
        {loading ? <Loading /> : null}

        <TrackInfo geo={geo} />
        <TrackMap geo={geo} />
      </article>
    </main>
  );
};

export default Track;
