import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import "../CartContainer/CartContainerStyle.css";

export const CartContainer = () => {
  let {
    cartProducts,
    getTotal,
    setCartProducts,
    getAmountOfItems,
    addItem,
    removeItem,
    emptyCart,
  } = useContext(CartContext);

  /* Local Storage */

  const deleteItem = (id) => {
    const productTodelete = cartProducts.filter((el) => el.id !== id);
    setCartProducts(productTodelete);
    localStorage.clear();
  };

  if (cartProducts.length === 0) {
    return (
      <div className="empty_cart">
        <p>Empty cart</p>
        <Link to={"/"}>
          <button>Go to homepage</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="products_div">
      {/* div for cart with products */}
      <div>
        <table class="styled-table">
          <tbody>
            {cartProducts.map((product) => (
              <div key={product.id}>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Each</th>
                    <th>Quantity</th>
                    <th>Total Item price</th>
                  </tr>
                </thead>
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.quantityPrice}</td>
                </tr>
                {/* <tr class="active-row">
            <td>Melissa</td>
            <td>5150</td>
        </tr> */}

                <button
                  onClick={() => {
                    deleteItem(product.id);
                  }}
                >
                  Delete item
                </button>
                <button onClick={() => addItem(product.id)}>add</button>
                <button onClick={() => removeItem(product.id)}>delete</button>
              </div>
            ))}
          </tbody>
        </table>
      </div>
      {/* div for empty cart */}
      <div>
        <button onClick={emptyCart}>Empty Cart</button>
        <p>total price: {getTotal()}</p>
        <p>Added products: {getAmountOfItems()}</p>
      </div>
    </div>
  );
};
