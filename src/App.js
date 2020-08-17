import React from 'react';
import data from './data.json';
import Products from './components/Products';
//Feature 1
class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:""
    };
  }
  render(){
        return (
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
                   <Products products={this.state.products}></Products>
                 </div>
                 <div className="sidebar">
                   Cart Items
                 </div>
              </div>
            </main>
            <footer>
              Allright Reserved.
            </footer>
          
          </div>
        );
  }
}

export default App;
