import Product from "./Product/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./UI/Spinner";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const { id } = useParams();
  let title;
  if (id !== undefined) {
    title = `${id.toUpperCase()} CLOTH`;
  } else {
    title = "ALL PRODUCTS";
  }
  useEffect(() => {
    const API = async () => {
      let women;
      let men;
      let result;
      const urlMen =
        "https://fakestoreapi.com/products/category/men's%20clothing";
      const urlWomen =
        "https://fakestoreapi.com/products/category/women's%20clothing?limit=4";
      switch (id) {
        case "women":
          women = await axios.get(urlWomen);
          result = women.data;
          break;
        case "men":
          men = await axios.get(urlMen);
          result = men.data;
          break;
        default:
          women = await axios.get(urlWomen);
          men = await axios.get(urlMen);
          result = [...men.data, ...women.data];
          break;
      }
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
