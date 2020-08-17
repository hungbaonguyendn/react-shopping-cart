import React from 'react';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';
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
  filterProducts=(event)=>{
    console.log(event.target.value);
    if (event.target.value === "ALL"){
      this.setState({size:event.target.value,products:data.products});
    }else{
      this.setState({
        size:event.target.value,
        products:data.products.filter(
          (product)=>product.availableSizes.indexOf(event.target.value)>=0
        ),
     });
    }   
  }
  sortProducts=(event)=>{
    console.log(event.target.value);
    const sort=event.target.value;
    this.setState((state)=>({
        sort:sort,
        products:this.state.products.slice().sort((a,b)=>(
          sort ==="lowest"?
          ((a.price>b.price)? 1:-1):
          sort==="highest"?
          ((a.price<b.price)? 1:-1):
          a._id<b._id? 1:-1
        )),
    }));
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
                   <Filter count={this.state.products.length}
                    sort={this.state.sort} 
                    size={this.state.size}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}
                   ></Filter>
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
