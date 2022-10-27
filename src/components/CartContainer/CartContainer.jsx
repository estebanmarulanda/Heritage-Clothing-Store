import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import "../CartContainer/CartContainerStyle.css";
import logo from "../assets/logo.png"
import {
  BsPlusSquare,
  BsDashSquare,
  BsFillTrashFill,
  BsFillTrash2Fill,
} from "react-icons/bs";

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
      <div className="empty_products_div">
        <p>Empty cart</p>
        <Link to={"/"}>
          <button>Go to homepage</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="main_cart_container_div">
      {/* div for cart with products */}
      <div className="products_div">
        <h2>Your cart</h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Item</div>
            <div className="col col-2">Each</div>
            <div className="col col-3">Quantity</div>
            <div className="col col-4">Total item price</div>
          </li>

          {cartProducts.map((product) => (
            <div key={product.id}>
              {/* table limits */}
              <div className="container">
                <li className="table-row">
                  <div
                    id="first_column"
                    className="col col-1"
                    data-label="Product Name"
                  >
                    {product.name}
                  </div>

                  <div
                    id="second_column"
                    className="col col-2"
                    data-label="Product Price"
                  >
                    {product.price} USD
                  </div>

                  <div
                    className="add_delete_div col col-3"
                    data-label="Amount per product"
                  >
                    <button onClick={() => addItem(product.id)}>
                      <BsPlusSquare />
                    </button>
                    {product.quantity}
                    <button onClick={() => removeItem(product.id)}>
                      <BsDashSquare />
                    </button>
                  </div>

                  <div className="col col-4" data-label="total amount per item">
                    {product.quantityPrice} USD
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        deleteItem(product.id);
                      }}
                    >
                      <BsFillTrash2Fill
                        id="delete_icon"
                        className="delete_item_icon"
                      />
                    </button>
                  </div>
                </li>
              </div>

              {/* table limits */}
            </div>
          ))}
          {/* div for empty cart */}
          <div className="emptyCart">
            <button onClick={emptyCart}>
              Empty Cart
              <BsFillTrashFill className="delete_item_icon" />
            </button>
            <div className="empty_cart">
              <h4>Added products: {getAmountOfItems()}</h4>
              <h4>Total : {getTotal()} USD</h4>
            </div>
          </div>
        </ul>
      </div>
      <div class="mainscreen">
      <div class="card">
        <div class="leftside">
          <img
            src={logo}
            class="product"
            alt="Shoes"
          />
        </div>
        <div class="rightside">
          <form action="">
            <h2>CheckOut</h2>
            <h2>Payment Information</h2>
            <p>Shipping address</p>
            <input type="text" class="inputbox" name="name" placeholder="enter your shipping address" required />
            <p>Full Name</p>
            <input type="text" class="inputbox" name="name" placeholder="enter your full name" required />
            <p>Cardholder Name</p>
            <input type="text" class="inputbox" name="name" placeholder="enter your cc name" required />
            <p>Card Number</p>
            <input type="number" class="inputbox" name="card_number" placeholder="CC number" id="card_number" required />

            <p>Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
<div class="expcvv">

            <p class="expcvv_text">Expiry</p>
            <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2">CVV</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" placeholder="* * *" required />
        </div>
            <p></p>
            <button type="submit" class="button">CheckOut</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
