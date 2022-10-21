import "./CartStyle/CartStyle.css"
import { Link } from "react-router-dom";
import { useContext} from "react";
import {RiMapPinUserLine,RiShoppingCart2Line} from "react-icons/ri";
import { CartContext } from "../../../context/cartContext";

export const CartWidget = ()=>{
    const {cartProducts} = useContext(CartContext); 
    
    let productsCount = []
    cartProducts.forEach(element => {
        productsCount.push(element)
    });

 
    
    let initialCounter = 0;
    const cartProductCounter = productsCount.reduce((previousValue,currentValue)=>(previousValue+currentValue),initialCounter)
   
    
    return(
        <div className="cartDiv">    
             <ul>
                <Link to="/cart"><li>My account<RiMapPinUserLine/></li></Link>
                <Link to="/cart"><li>Cart<RiShoppingCart2Line/><span className="bubble">{cartProductCounter}</span></li></Link>
             </ul>       
        </div>
    )
}