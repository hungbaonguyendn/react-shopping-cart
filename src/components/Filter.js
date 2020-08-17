import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">
                   {this.props.count} Products
                </div>
                <div className="filter-sort">
                 Order{" "}<select value={this.props.sort} onChange={this.props.sortProducts}>
                     <option value="">Newest</option> 
                     <option value="highest">Highest</option> 
                     <option value="lowest">Lowest</option> 
                     </select> 
                </div>
                <div className="filter-size">
                 Filter{" "}<select value={this.props.size} onChange={this.props.filterProducts}>
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
