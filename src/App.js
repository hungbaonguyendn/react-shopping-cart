import React from 'react';

import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from "./store";
import {Provider} from "react-redux";

class App extends React.Component {
  
  render(){
        return (
          <Provider store={store}>
          <div className="grid-container">
            <header>
              <div className="brand">
                <a href="#">React-shopping-cart</a>
              </div>
              <div className="header-links">
                <a href="#">Signin</a>
              </div>
            </header>
            <main>
              <div className="content">
                 <div className="main">
                   <Filter ></Filter>
                   <Products  addToCart={this.addToCart}
                   ></Products>
                 </div>
                 <div className="sidebar">
                  <Cart                
                  ></Cart>
                 </div>
              </div>
            </main>
            <footer>
              Allright Reserved.
            </footer>
          
          </div>
          </Provider>
        );
  }
}

export default App;
