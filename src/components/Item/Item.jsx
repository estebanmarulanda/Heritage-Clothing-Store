import "../Item/Item.css"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({ item }) => {
  return (
    <div className="cardProduct">
      <Card style={{ width: "18rem"}}>
        <Card.Img
          variant="top"
          src="https://jumbocolombiaio.vtexassets.com/arquivos/ids/212532/7701977052469-1.jpg?v=637814233329030000"
        />
        <Card.Body>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Text>Compra</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
