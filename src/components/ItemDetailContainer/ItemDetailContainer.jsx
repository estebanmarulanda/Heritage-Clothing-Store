import { arrProducts } from "../DataBase/products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrProducts);
      }, 1000);
    });
  };
  useEffect(() => {
    //API call

    getProducts()
      .then((result) => {
        const filteredProducts = result.find((ele) => ele.id === parseInt(id));
        setProducts(filteredProducts);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    
    <div>
        <ItemDetail cardDetail={products}/>
    </div>
    
    )
};
