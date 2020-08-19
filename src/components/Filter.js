import React, { Component } from 'react';
import { connect } from 'react-redux';
import {filterProducts, sortProducts} from "../actions/productActions";
class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts?(<div>Loading...</div>):
            <div className="filter">
                <div className="filter-result">
                   {this.props.filteredProducts.length} Products
                </div>
                <div className="filter-sort">
                 Order{" "}<select value={this.props.sort} onChange={(e)=>this.props.sortProducts(this.props.filteredProducts,e.target.value)}>
                     <option value="">Newest</option> 
                     <option value="highest">Highest</option> 
                     <option value="lowest">Lowest</option> 
                     </select> 
                </div>
                <div className="filter-size">
                 Filter{" "}<select value={this.props.size} onChange={(e)=>this.props.filterProducts(this.props.products,e.target.value)}>
                  <option vlaue="">ALL</option>
                  <option vlaue="S">S</option>
                  <option vlaue="M">M</option>
                  <option vlaue="L">L</option>
                  <option vlaue="XL">XL</option>
                  <option vlaue="XXL">XXL</option>
                  <option vlaue="XXXL">XXXL</option>
                 </select>
                </div>
            </div>
        )
    }
}
export default connect((state)=>({
   size:state.products.size,
   sort:state.products.sort,
   products:state.products.items,
   filteredProducts:state.products.filteredItems,
}),
{filterProducts,
    sortProducts,
})(Filter);