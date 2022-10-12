import "../ItemCount/ItemCountStyle.css";
import { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

export function ItemCount() {
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
        <div className="minusSign"><button onClick={removeProduct}>-</button></div>
        <div className="productCount">{productCount}</div>
        <div className="addSign"><button onClick={addProduct}>+</button></div>
        <div className="addToCartBtn"><button>Add to {<RiShoppingCart2Line />}</button></div>
    </div>
  );
}
