import React, { Component } from "react";
import "../css/navbar.css";

class NavBar extends Component {
  state = {
    menuOpen: false,
  };

  menuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });

    var menu = document.getElementsByClassName("menu-links")[0];
    var line1 = document.getElementsByClassName("line-1")[0];
    var line2 = document.getElementsByClassName("line-2")[0];
    var line3 = document.getElementsByClassName("line-3")[0];

    if (this.state.menuOpen) {
      menu.classList.remove("menu-links-open");
      line1.classList.remove("line-1-open");
      line2.classList.remove("line-2-open");
      line3.classList.remove("line-3-open");
      document.body.style.overflow = "scroll";
    } else {
      menu.classList.add("menu-links-open");
      line1.classList.add("line-1-open");
      line2.classList.add("line-2-open");
      line3.classList.add("line-3-open");
      document.body.style.overflow = "hidden";
    }
  };

  render() {
    return (
      <div className="navbar-container">
        <div className="hamburger" onClick={this.menuToggle}>
          <span className="line-1 line-closed"></span>
          <span className="line-2 line-closed"></span>
          <span className="line-3 line-closed"></span>
        </div>
        <div className="menu-links">
          <div
            onClick={() => {
              this.setState({ menuOpen: false });
              this.props.toHome();
            }}
            className="home link"
          >
            VCTY
          </div>
          <div
            className="products link"
            onClick={() => {
              this.setState({ menuOpen: false });
              this.props.toProducts();
            }}
          >
            Products
          </div>
          <div
            onClick={() => {
              this.setState({ menuOpen: false });
              this.props.toAbout();
            }}
            className="about link"
          >
            About
          </div>
          <div
            className="contact link"
            onClick={() => {
              this.setState({ menuOpen: false });
              this.props.toContact();
            }}
          >
            Contact
          </div>
        </div>
        <div className="product-links">
          <div className="title link link">Products</div>
          <div className="home link">TEES</div>
          <div className="products link">HOODIES</div>
          <div className="about link">HEADWEAR</div>
          <div className="contact link">ALL</div>
        </div>
        <div className="logo-container">
          <a
            onClick={() => {
              this.setState({ menuOpen: false });
              this.props.toHome();
            }}
          >
            <img
              className="logo"
              src="https://cdn.shopify.com/s/files/1/0447/2517/files/Artboard_2_e768073c-0677-4d65-b29a-bca05d963b7e_100x100@2x.png?v=1551384962"
              alt=""
            />
          </a>
        </div>
        <div
          className="cart"
          onClick={() => {
            this.setState({ menuOpen: false });
            this.props.toCart();
          }}
        >
          <div className="cart-amount">{this.props.cartAmount}</div>
          <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default NavBar;
