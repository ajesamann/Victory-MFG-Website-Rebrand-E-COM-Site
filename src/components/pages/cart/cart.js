import React, { Component } from "react";
import "../../../css/pages-css/cart-css/cart.css";

class Cart extends Component {
  calculateTotalPrice = () => {
    var itemsInCart = this.props.items;
    var priceArray = [];

    for (let i = 0; i < itemsInCart.length; i++) {
      var price = parseInt(itemsInCart[i].price);

      priceArray.push(price);
    }

    var total = priceArray.reduce(function (a, b) {
      return a + b;
    }, 0);

    return total;
  };

  cartInfo = () => {
    var totalPrice = this.calculateTotalPrice();
    if (this.props.items.length < 1) {
      return <div className="no-items">Cart is empty!</div>;
    } else {
      return (
        <div className="cart-info">
          <div className="top-cart">
            <div className="your-cart">Your Cart</div>
            <hr />
          </div>
          {this.props.items.map((item, index) => (
            <div className="item-container" key={index}>
              <div className="item-info">
                <div
                  className="remove-btn"
                  onClick={() => this.props.removeFromCart(item.id)}
                >
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className="item-name">{item.name}</div>
                <div className="item-price">${item.price}</div>
              </div>
              <hr />
            </div>
          ))}
          <div className="bottom">
            <div className="price-container">
              <div className="total-items">Items: ${totalPrice}.00</div>
              <div className="total-tax">Tax: $0.00</div>
              <div className="total-price">Total: ${totalPrice}.00</div>
            </div>
            <div className="cart-buttons">
              <div className="coupon-btn">Use Coupon</div>
              <div className="checkout-btn">
                Checkout<i className="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return <div className="cart-container">{this.cartInfo()}</div>;
  }
}

export default Cart;
