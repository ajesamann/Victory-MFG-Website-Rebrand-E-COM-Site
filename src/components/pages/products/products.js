import React, { Component } from "react";
import "../../../css/pages-css/products-css/products.css";
import Product from "./product.js";

class Products extends Component {
  render() {
    return (
      <div className="products-container">
        <Product
          pushToCart={this.props.pushToCart}
          name="Champion x VCTY"
          price="55.00"
          img="//cdn.shopify.com/s/files/1/0447/2517/products/ROYAL_CHAMPION_HOODIE_2048x.png?v=1549561302 2048w"
        />
        <Product
          pushToCart={this.props.pushToCart}
          name="Christy Mack Tee (WHITE)"
          price="32.00"
          img="//cdn.shopify.com/s/files/1/0447/2517/products/christy_mack_white_tee_e7533296-5b1d-43ad-9966-9d270c024f27_2048x.png?v=1556931590 2048w"
        />
        <Product
          pushToCart={this.props.pushToCart}
          name="Ransom Hoody (Grey)"
          price="55.00"
          img="//cdn.shopify.com/s/files/1/0447/2517/products/RANSOM_HEATHER_GREY_HOODIE_2048x.png?v=1549505462 2048w"
        />
      </div>
    );
  }
}

export default Products;
