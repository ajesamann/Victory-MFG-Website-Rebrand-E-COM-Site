import React, { Component } from "react";
import "../../../css/pages-css/home-css/newsletter.css";

class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter-container">
        <div className="big-text">JOIN THE MOVEMENT</div>
        <img
          src="https://cdn.shopify.com/s/files/1/0447/2517/files/Artboard_2_e768073c-0677-4d65-b29a-bca05d963b7e_100x100@2x.png?v=1551384962"
          alt=""
          className="logo-newsletter"
        />
        <div className="little-text">
          All deals and drops sent directly to your inbox.
        </div>
        <div className="email-container">
          <input
            type="email"
            name="news-email"
            id="email-input"
            placeholder="Your Email"
          />
          <input type="button" value="Submit" id="submit-btn-news" />
        </div>
      </div>
    );
  }
}

export default Newsletter;
