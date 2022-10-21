import "../ItemCount/ItemCountStyle.css";
import { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiFillMinusCircle,AiFillPlusCircle } from "react-icons/ai";


export function ItemCount({onAdd}) {
    
  const [productCount, setCounter] = useState(1);

  const removeProduct = () => {
    if (productCount >= 2) {
      setCounter(productCount - 1);
    } else {
      setCounter(1);
    }
  };

  const addProduct = () => {
    setCounter(productCount + 1);
  };

  return (
    <div className="mainItemCountDiv">
        <div className="minusSign"><button onClick={removeProduct}>{<AiFillMinusCircle/>}</button></div>
        <div className="productCount">{productCount}</div>
        <div className="addSign"><button onClick={addProduct}>{<AiFillPlusCircle/>}</button></div>
        <div className="addToCartBtn"><button onClick={()=>onAdd(productCount)}>Add to {<RiShoppingCart2Line />}</button></div>
    </div>
  );
}
