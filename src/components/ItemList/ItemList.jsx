import "../Item/itemStyle.css"
import {Item} from "../Item/Item"
export const ItemList = ({ items }) => {
  return (
    <div className="productsContainer">
      {items.map((product) => (
       <Item item={product} />
      ))}
    </div>
  );
};
