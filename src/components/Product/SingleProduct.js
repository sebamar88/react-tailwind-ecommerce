import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AddtoCart from "./AddtoCart";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const API = async () => {
      const url = `https://617b5fb2d842cf001711be7c.mockapi.io/api/v1/products/${id}`;
      const productData = await axios.get(url);
      const result = productData.data;
      setProduct(result);
    };
    API();
  }, [id]);
  return (
    <div className="grid grid-cols-2 py-28 place-items-center">
      <div>
        <img className="max-w-xs" src={product.image} alt={product.title} />
      </div>
      <div>
        <p className="capitalize text-gray-700 font-medium">
          Category: <span className="underline">{product.category}</span>
        </p>
        <h1 className="text-5xl my-8 font-bold text-blue-700">
          {product.title}
        </h1>
        <span className="text-s text-indigo-500 font-serif font-bold mr-8">
          Rating: {product?.rating?.rate}
        </span>
        <span className="text-s text-indigo-500 font-serif font-bold">
          Count: {product?.rating?.count}
        </span>
        <p className="text-xl my-8">{product.description}</p>
        <p className="text-xl mb-8">${product.price}</p>
        <AddtoCart stock={8} product={product.title} />
      </div>
    </div>
  );
};

export default SingleProduct;
