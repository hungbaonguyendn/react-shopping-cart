import React from 'react';

import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';
import store from "./store";
import {Provider} from "react-redux";
//Feature 1
class App extends React.Component {
  constructor(){
    super();
    this.state={     
      cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[]
    };
    
  }
  
  addToCart=(product)=>{
   const cartItems=this.state.cartItems.slice();
   let alreadyInCart=false;
   cartItems.forEach(item=>{
      if(item._id===product._id){
        item.count++;
        alreadyInCart=true;
      }
   });
   if(!alreadyInCart){
     cartItems.push({...product,count:1});
   }  
   this.setState({cartItems});
   localStorage.setItem("cartItems",JSON.stringify(cartItems));
  };
  removeFromCart=(product)=>{
    const cartItems=this.state.cartItems.slice().filter((x)=>x._id !== product._id);
    console.log(cartItems);
    this.setState({cartItems});
  
    localStorage.setItem("cartItems",JSON.stringify(cartItems));  
  }
  createOrder=(order)=>{
    alert("Need to save order "+order.name);
  }
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
                  <Cart cartItems={this.state.cartItems}
                    removeFromCart={this.removeFromCart}
                    createOrder={this.createOrder}
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
