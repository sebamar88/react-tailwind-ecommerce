import AddtoCart from "./AddtoCart";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const { title, image, category, price, id } = item;

  const ondAdd = (counter) => {
    console.log("====================================");
    console.log(`You add ${counter} "${title}" to your cart.`);
    console.log("====================================");
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
      <AddtoCart onAdd={ondAdd} stock={8} product={title} />
    </div>
  );
};

export default Product;
