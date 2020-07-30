import React, { Component } from "react";
import "../../../css/pages-css/products-css/product.css";

class Product extends Component {
  render() {
    return (
      <div className="product-container">
        <div className="product-images">
          <img src={this.props.img} alt="" className="pic-1" />
        </div>
        <div className="product-name">{this.props.name}</div>
        <div className="product-price">{this.props.price}</div>
        <div
          className="quick-add"
          onClick={() =>
            this.props.pushToCart(this.props.name, this.props.price)
          }
        >
          Quick Add<i className="add-to-cart fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Product;
