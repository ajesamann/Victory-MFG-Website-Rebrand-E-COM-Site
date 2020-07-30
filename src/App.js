import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar.js";
import Footer from "./components/footer.js";
import Home from "./components/pages/homepage/home.js";
import About from "./components/pages/about/about.js";
import Contact from "./components/pages/contact/contact.js";
import Products from "./components/pages/products/products.js";
import Cart from "./components/pages/cart/cart.js";

class App extends Component {
  state = {
    home: true,
    about: false,
    products: false,
    contact: false,
    cart: false,
    cartItems: [],
  };

  //slide the menu back once the user clicks a link

  fixScreen() {
    var menu = document.getElementsByClassName("menu-links")[0];
    var line1 = document.getElementsByClassName("line-1")[0];
    var line2 = document.getElementsByClassName("line-2")[0];
    var line3 = document.getElementsByClassName("line-3")[0];

    menu.classList.remove("menu-links-open");
    line1.classList.remove("line-1-open");
    line2.classList.remove("line-2-open");
    line3.classList.remove("line-3-open");
    document.body.style.overflow = "scroll";
  }

  //navigation function

  navToAbout = () => {
    this.setState({
      about: true,
      home: false,
      products: false,
      contact: false,
      cart: false,
    });

    this.fixScreen();
  };

  navToContact = () => {
    this.setState({
      about: false,
      home: false,
      products: false,
      contact: true,
      cart: false,
    });

    this.fixScreen();
  };

  navToProducts = () => {
    this.setState({
      about: false,
      home: false,
      products: true,
      contact: false,
      cart: false,
    });

    this.fixScreen();
  };

  navToCart = () => {
    this.setState({
      about: false,
      home: false,
      products: false,
      contact: false,
      cart: true,
    });

    this.fixScreen();
  };

  navToHome = () => {
    this.setState({
      about: false,
      home: true,
      products: false,
      contact: false,
      cart: false,
    });

    this.fixScreen();
  };

  //cart functionality
  pushToCart = (itemName, itemPrice) => {
    for (var index = 0; index < this.state.cartItems.length; index++) {}
    this.setState((prevState) => ({
      cartItems: [
        ...prevState.cartItems,
        { id: index, name: itemName, price: itemPrice },
      ],
    }));
  };

  removeFromCart = (itemId) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => itemId !== item.id),
    }));
  };

  //dynamically render the content
  renderPage = () => {
    if (this.state.home) {
      return <Home />;
    } else if (this.state.about) {
      return <About />;
    } else if (this.state.products) {
      return <Products pushToCart={this.pushToCart} />;
    } else if (this.state.contact) {
      return <Contact />;
    } else if (this.state.cart) {
      return (
        <Cart
          items={this.state.cartItems}
          removeFromCart={this.removeFromCart}
        />
      );
    }
  };

  render() {
    return (
      <div className="app-container">
        <NavBar
          toHome={this.navToHome}
          toAbout={this.navToAbout}
          toContact={this.navToContact}
          toProducts={this.navToProducts}
          toCart={this.navToCart}
          cartAmount={this.state.cartItems.length}
        />
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default App;
