import Product from "./Product/Product";
import { useState, useEffect } from "react";
import axios from 'axios';
import Spinner from "./UI/Spinner";

const ItemListContainer = ({ title, setCart, cart }) => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const API = async () => {
      const urlMen = "https://fakestoreapi.com/products/category/men's%20clothing";
      const urlWomen = "https://fakestoreapi.com/products/category/women's%20clothing?limit=4";
      const men = await axios.get(urlMen);
      const women = await axios.get(urlWomen);
      const result = [...men.data, ...women.data ];
      setLoad(true)
      setTimeout(() => {
        setLoad(false)
        setProducts(result);
      }, 2000) 

    };
    API(); 
  }, []); 

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        <div className={load ? 'mt-6' : 'mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'}>
        
          {load
            ? <Spinner /> : 
            products.map((product) => (
              <Product
                setCart={setCart}
                cart={cart}
                key={product.id}
                item={product}
              />
            ))
            }
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
