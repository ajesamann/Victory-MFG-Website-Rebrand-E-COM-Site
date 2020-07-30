import React, { Component } from "react";
import "../../../css/pages-css/contact-css/contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="top-contact">
          <div className="contact-title">Contact the VCTY Team</div>
          <div className="under-title">
            Call us or shoot us an email, we are always available for your
            questions and concerns. Monday-Friday we got you.
          </div>
        </div>
        <div className="bottom-contact">
          <div className="buttons">
            <a href="tel:(317)-731-5063" className="call">
              Call Us
            </a>
            <a href="mailto:info@vcty.com" className="email">
              Email Us
            </a>
          </div>
          <div className="location">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <div className="location-text">
              {" "}
              933 N Lynhurst Dr, Indianapolis, IN 46224
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th className="left">Day</th>
                <th className="right">Hours</th>
              </tr>
              <tr>
                <td className="left">Sunday</td>
                <td className="right">Closed</td>
              </tr>
              <tr>
                <td className="left">Monday</td>
                <td className="right">Closed</td>
              </tr>
              <tr>
                <td className="left">Tuesday</td>
                <td className="right">12-9PM</td>
              </tr>
              <tr>
                <td className="left">Wednesday</td>
                <td className="right">12-9PM</td>
              </tr>
              <tr>
                <td className="left">Thursday</td>
                <td className="right">12-9PM</td>
              </tr>
              <tr>
                <td className="left">Friday</td>
                <td className="right">12-9PM</td>
              </tr>
              <tr>
                <td className="left">Saturday</td>
                <td className="right">12-9PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contact;
