import AddtoCart from "./AddtoCart";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/cartContext";

const Product = ({ item }) => {
  const { title, image, category, price, id } = item;
  const [addedToCart, setAddedToCart] = useState(false);

  const { addToCart, setOrderReady } = useCartContext();
  const onAdd = (contador) => {
    if (contador > 0) {
      setAddedToCart(true);
      addToCart({
        quantity: contador,
        product: item,
      });
      setOrderReady(false);
    } else {
      setAddedToCart(false);
    }
  };

  return (
    <div key={id} className="group relative flex flex-col justify-between">
      <Link to={`/product/${id}`}>
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="inset-0" />
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-500 capitalize font-bold">
              {category}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </Link>
      {!addedToCart ? (
        <AddtoCart onAdd={onAdd} stock={8} product={item} />
      ) : (
        <Link
          to="/cart"
          className="bg-green-500 hover:bg-green-700 text-white text-center font-bold py-3 px-4 rounded"
        >
          Go to Cart
        </Link>
      )}
    </div>
  );
};

export default Product;
