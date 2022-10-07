import { arrProducts } from "../DataBase/products";
import { useEffect, useState } from "react";
import {ItemList} from "../ItemList/ItemList"
export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrProducts);
      }, 3000);
    });
  };

  useEffect(() => {
    //API call
    getProducts().then((result) => setProducts(result));
  }, []);
  return (
    <div >
      <ItemList  items = {products}></ItemList>
    </div>
  );
};
