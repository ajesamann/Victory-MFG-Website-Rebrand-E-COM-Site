import React, { Component } from "react";
import "../css/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <div className="footer-text">
          Designed by AJ Esamann &copy; 2020 VCTY MFG
        </div>
      </div>
    );
  }
}

export default Footer;
