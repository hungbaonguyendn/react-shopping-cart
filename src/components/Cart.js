import React, { Component } from 'react'
import formatCurrency from '../util';
import Fade from 'react-reveal/Fade';
export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state={openCheckout:false,
            name:"",
            email:"",
            address:""
        };
    }
    inputHandle=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    createOrder=(e)=>{
        e.preventDefault();
        const order={
            name:this.state.name,
            email:this.state.email,
            address:this.state.address,
            cartItems:this.props.cartItems,
        };
        console.log(order);
        this.props.createOrder(order);
    }
    render() {
        const {cartItems}=this.props;
        return (
            <div>
             {this.props.cartItems.length===0?<div className="cart-header">Cart is empty</div>:
              <div className=" cart-header">You have {this.props.cartItems.length} in the cart</div>}
                          
              <div className="cart">
                  <Fade left cascade={true}>
                  <ul className="cart-items">
                     {cartItems.map(item=>
                        (<li key={item._id}>
                            <div>
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <div className="right">
                                    {formatCurrency(item.price)}x{item.count}{" "}
                                <button className="button" onClick={()=>this.props.removeFromCart(item)}>Remove</button>
                                </div>
                                
                            </div>

                        </li>))}
                  </ul>
                  </Fade>
               </div>
               {cartItems.length!==0 && 
               <div>
               <div className="cart">
                    <div className="total">
                        <div>
                        Total:{" "}
                        {formatCurrency(cartItems.reduce((a,c)=>a+c.price*c.count,0))}
                        </div> 
                        <button onClick={()=>this.setState({openCheckout:true})} className="button primary">
                        Proceed
                       </button>                      
                    </div>
                 </div> 
                  {this.state.openCheckout && (
                      <Fade right cascade={true}>
                    <div className="cart">
                        <form onSubmit={this.createOrder}>
                            <ul className="form-container">
                                <li>
                                    <label>Email:</label>
                                    <input
                                    type="email"
                                    name="email"
                                    required
                                    onChange={this.inputHandle}
                                    ></input>
                                </li>
                                <li>
                                    <label>Name:</label>
                                    <input
                                    type="text"
                                    name="name"
                                    required
                                    onChange={this.inputHandle}
                                    ></input>
                                </li>
                                <li>
                                    <label>Address:</label>
                                    <input
                                    type="text"
                                    name="address"
                                    required
                                    onChange={this.inputHandle}
                                    ></input>
                                </li>
                                <li>
                                    <button type="submit" className="button primary">Checkout</button>
                                </li>
                            </ul>
                        </form>
                    </div>  
                    </Fade>  
                  )}  
                  </div>  
               }               
 
            </div>            
        )
    }
}
