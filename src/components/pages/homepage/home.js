import React, { Component } from "react";
import "../../../css/pages-css/home-css/home.css";
import PhotoSlide from "./photo-slide.js";
import Widget from "./home-widget.js";
import Newsletter from "./newsletter.js";
import WillyMackTruck from "./willymacktruck.js";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="slideshow">
          <PhotoSlide />
        </div>
        <div className="widgets-container">
          <Widget
            title="TEES"
            img="//cdn.shopify.com/s/files/1/0447/2517/files/IMG_8959_2048x.jpg?v=1551381340 2048w"
            desc="All of our Tees are 100% cotton and crafted here in the USA. They are true to size with a tailored form to create a very flattering fit. These shirts are truly MADE TO WIN!"
          />
          <Widget
            title="FLEECE"
            img="//cdn.shopify.com/s/files/1/0447/2517/files/Screen_Shot_2019-02-28_at_11.36.26_AM_2048x.png?v=1551480746 2048w"
            desc="All of our Hoodies are Champion and 100% cotton. They are true to size with a tailored form to create a very flattering fit. These hoodies are truly MADE TO WIN!"
          />
          <Widget
            title="Christy Mack"
            img="//cdn.shopify.com/s/files/1/0447/2517/files/Screen_Shot_2019-05-03_at_6.25.42_PM_2048x.png?v=1556933161 2048w"
            desc="Shop our Christy Mack collection - available for a limited time!"
          />
        </div>
        <WillyMackTruck />
        <div className="newsletter">
          <Newsletter />
        </div>
      </div>
    );
  }
}

export default Home;
