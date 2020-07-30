import React, { Component } from "react";
import "../../../css/pages-css/home-css/widget.css";

class Widget extends Component {
  render() {
    return (
      <div className="widget-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url('${this.props.img}')` }}
        ></div>
        <div className="info">
          <div className="title">{this.props.title}</div>
          <div className="divider"></div>
          <div className="desc">{this.props.desc}</div>
          <div className="shop-now-btn">Shop {this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default Widget;
