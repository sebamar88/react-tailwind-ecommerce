import Product from "./Product/Product";
import { useState, useEffect } from "react";
import Spinner from "./UI/Spinner";
import { useParams } from "react-router-dom";
import { getFirestore } from "../services/getFirebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  let params = useParams();
  const id = params.id !== undefined ? params.id : "";
  let title;
  if (id !== undefined) {
    title = `${id.toUpperCase().replace("-", " ")}`;
  } else {
    title = "ALL PRODUCTS";
  }

  useEffect(() => {
    const dbQuery = getFirestore();

    const filterQuery = id
        ? dbQuery.collection("products").where("category", "==", id)
        : dbQuery.collection("products");

    filterQuery
        .get()
        .then((res) => {
            setProducts(
                res.docs.map((product) => ({
                    id: product.id,
                    ...product.data(),
                }))
            );
        })
        .catch((err) => console.error(err))
        .finally(() => setLoad(false));
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
