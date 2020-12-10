import React from "react";
import { Link } from "react-router-dom";

import "./home.scss";

const Home = () => {
  return (
    <main className="hero">
      <div className="grid-2">
        <article className="info-wrapper">
          <h1>Helping you track any domain.</h1>

          <p>
            We can help you to find any domain or ip location and show it yo you
            in an interative map.
          </p>

          <Link to="/track" className="btn">Go ahead</Link>
        </article>

        <article className="img-wrapper">
          <img src="/assets/traveller.svg" alt="Traveller" />
        </article>
      </div>
    </main>
  );
};

export default Home;
