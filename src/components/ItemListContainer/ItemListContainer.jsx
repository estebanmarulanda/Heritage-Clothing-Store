import { arrProducts } from "../DataBase/products";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainerStyle.css";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

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
    getProducts().then((result) => {
      if (categoryId) {
        const filteredCategory = result.filter(
          (ele) => ele.category === categoryId
        );
        setProducts(filteredCategory);
        setLoading(false);
      } else {
        setProducts(result);
        setLoading(false);
      }
    });
  }, [categoryId]);
  return (
    <div className="mainItemsDiv">
      {loading ? (
        <div>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      ) : (
        <ItemList items={products} />
      )}
    </div>
  );
};
