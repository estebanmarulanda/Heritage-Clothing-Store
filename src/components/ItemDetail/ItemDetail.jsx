import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({cardDetail}) => {
    return(
        <div className="cardProduct">
      <Card style={{ width: "18rem"}}>
        <Card.Img
          variant="top"
          src={cardDetail.picture}
        />
        <Card.Body>
          <Card.Title>{cardDetail.name}</Card.Title>
          <Card.Text>{`${cardDetail.price} USD`}</Card.Text>
          <ItemCount/>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </div>
    )
}