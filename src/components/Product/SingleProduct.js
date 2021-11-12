import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddtoCart from "./AddtoCart";
import { useCartContext } from "../../context/cartContext";
import Spinner from "../UI/Spinner";
import { getFirestore } from "../../services/getFirebase";

const getProduct = (id) => {
  const db = getFirestore();
  const itemCollection = db.collection("products");
  const oneItem = itemCollection.doc(id);
  return oneItem.get();
};

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCartContext();
  const onAdd = (contador) => {
    addToCart({
      quantity: contador,
      product: product,
    });
  };
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((doc) => {
        if (doc.exists) {
          setProduct({ id: doc.id, ...doc.data() });
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
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
            <AddtoCart stock={8} onAdd={onAdd} />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
