import { CREATE_ORDER, CLEAR_ORDER, CLEAR_CART } from "../types"

export const createOrder=(order)=>(dispatch)=>{
    fetch("/api/orders",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(order),
    }).then(res=>res.json())
    .then((data)=>{
        console.log(data);
        dispatch({type:CREATE_ORDER,payload:data});
        localStorage.clear("cartItems");
        dispatch({type:CLEAR_CART})
    });
};
export const clearOrder=()=>(dispatch)=>{
    dispatch({type:CLEAR_ORDER});
};