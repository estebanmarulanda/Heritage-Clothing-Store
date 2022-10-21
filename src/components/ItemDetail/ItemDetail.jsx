import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartContext } from "../../context/cartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetailStyle.css";

export const ItemDetail = ({item}) => {
  const {addProduct} = useContext(CartContext);
  const addToCart = (quantity) => { 
    addProduct(item,quantity);
    
    
  }

  return(
        <div className="mainDivContainer">
      <Card className="cardProduct">
        <Card.Img
          variant="top"
          src={item.picture}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{`${item.price} USD`}</Card.Text>
          <ItemCount onAdd = {addToCart}/>
          <Button className="buyBtn" variant="primary">Buy</Button>
        </Card.Body>
      </Card>
  
    </div>
    )
}