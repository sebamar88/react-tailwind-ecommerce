import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import PriceTotal from "./PriceTotal";

const Cart = () => {
  const { cartList, removeProduct } = useCartContext();
  return (
    <div className="container py-10">
      {cartList.length === 0 ? (
        <div className="flex items-center flex-col justify-center text-center h-96">
          <h2 className="text-3xl text-gray-700 font-extrabold mb-8">
            Empty Basket
          </h2>
          <Link to={"/"}>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white text-center font-bold py-3 px-4 rounded"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {cartList.map((item, index) => {
              return (
                <>
                  <div
                    key={index.id}
                    className="group relative flex flex-col justify-between"
                  >
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm text-gray-700 font-extrabold">
                        <span aria-hidden="true" className="inset-0" />
                        {item.product.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 capitalize font-bold">
                        {item.product.category}
                      </p>
                      <p className="text-md mt-3 text-green-600 font-bold">{`Price :$${item.product.price}`}</p>
                      <p className="text-md text-indigo-700 font-bold">{`Qty :  ${item.quantity} `}</p>
                      <p className="text-md text-green-600 font-bold">
                        Sub total : $
                        {parseInt(item.quantity) * parseInt(item.product.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white text-center font-bold py-3 px-4 rounded"
                      onClick={() => removeProduct(item.product.id)}
                    >
                      ELIMINAR PRODUCTO{" "}
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          <PriceTotal />
        </>
      )}
    </div>
  );
};

export default Cart;
