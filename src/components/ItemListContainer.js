import Product from "./Product/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./UI/Spinner";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  let params = useParams();
  const id = params.id !== undefined ? `^${params.id}$` : "";
  const title =
    params.id !== undefined ? `${params.id.toUpperCase()}` : "ALL PRODUCTS";

  useEffect(() => {
    const API = async () => {
      const url = `https://617b5fb2d842cf001711be7c.mockapi.io/api/v1/products?category=${id}`;
      const productData = await axios.get(url);
      const result = productData.data;
      setTimeout(() => {
        setLoad(false);
        setProducts(result);
      }, 2000);
    };
    API();
  }, [id]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <div
          className={
            load
              ? "mt-6"
              : "mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
          }
        >
          {load ? (
            <Spinner />
          ) : (
            products.map((product) => (
              <Product key={product.id} item={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
