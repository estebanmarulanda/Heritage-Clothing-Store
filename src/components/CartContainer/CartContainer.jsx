import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export const CartContainer = () =>{
    
    const {cartProducts} = useContext(CartContext);

  
     return(
        <div>
            <div>
                {
                    cartProducts.map((product) => (
                        <div>
                            <p>{product.name}</p>
                            <p>Unit price{product.price}</p>
                            <p>Quantity{product.quantity}</p>
                            <p>Precio por cantidad{product.quantityPrice}</p>
                            {/* <button onClick={() => removeItem(product.id)}>Eliminar producto</button> */}
                        </div>
                    ))

                }
                {/* <p>Precio total: {getTotalPrice()} </p> */}
            </div>
        </div>
    )
}