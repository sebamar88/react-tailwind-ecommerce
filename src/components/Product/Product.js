import AddtoCart from "./AddtoCart";

const Product = ({ item, setCart, cart }) => {
  const { title, image, category, price, id } = item;
  return (
    <div key={id} className="group relative flex flex-col justify-between">
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
            <a href="!#">
              <span aria-hidden="true" className="inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500 capitalize font-bold">{category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
      <AddtoCart setCart={setCart} cart={cart} stock={8} />
    </div>
  );
};

export default Product;
