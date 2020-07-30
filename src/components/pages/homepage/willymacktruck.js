import React, { Component } from "react";
import "../../../css/pages-css/home-css/willymacktruck.css";

class WillyMackTruck extends Component {
  render() {
    return (
      <div className="truck-container">
        <img
          src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/52352446_124191148656886_9076076245928962686_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=110&_nc_ohc=OQiPOgjHphQAX9j_o0O&oh=149aa7d926f085f3cda28a0c424e40d7&oe=5F425FD7"
          alt=""
          className="truck-img"
        />
        <div className="truck-divider"></div>
        <div className="truck-desc">
          Follow @willymacktruck on instagram for access to exclusive giveaways
          and events.
        </div>
        <a
          href="https://www.instagram.com/willymacktruck/"
          target="_blank"
          rel="noopener noreferrer"
          className="follow-btn"
        >
          Follow <i className="fa fa-plus" aria-hidden="true"></i>
        </a>
      </div>
    );
  }
}

export default WillyMackTruck;
