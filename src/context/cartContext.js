import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{
    const [cartProducts, setCartProducts] = useState([]);
     const isInCart = (id) =>{
         const productExists = cartProducts.some((element)=>element.id === id)
         return productExists;
     }
    const addProduct = (item,quantity) =>{  
        const cartProductsCopy = [...cartProducts]
        
         if(isInCart(item.id)){
             const productPosition = cartProductsCopy.findIndex((element)=>element.id === item.id)
             cartProductsCopy[productPosition].quantity += quantity
             cartProductsCopy[productPosition].quantityPrice = cartProductsCopy[productPosition].quantity * cartProductsCopy[productPosition].price;
             setCartProducts(cartProductsCopy)
         }else{
            const newProduct = {
                ...item,
                quantity : quantity,
                quantityPrice : quantity * item.price,
            }
            cartProductsCopy.push(newProduct)
            setCartProducts(cartProductsCopy)
        
        
    }
    
}
    return(
        <CartContext.Provider value={{cartProducts, addProduct}}>
            {children}           
        </CartContext.Provider>
    )
}