import AddtoCart from "./AddtoCart";

const Product = ({ item, setCart, cart }) => {
  const { fields, id } = item;
  const { name, image, company, price } = fields;
  return (
    <div key={id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={image[0].thumbnails.large.url}
          alt={name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="!#">
              <span aria-hidden="true" className="inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{company}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
      <AddtoCart setCart={setCart} cart={cart} stock={8} />
    </div>
  );
};

export default Product;
