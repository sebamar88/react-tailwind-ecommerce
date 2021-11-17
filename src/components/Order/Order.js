import { useState, useEffect } from "react";
import Spinner from "../UI/Spinner";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [load, setLoad] = useState(true);
  const params = useParams();
  const id = params.orderId !== undefined ? params.orderId : "";

  useEffect(() => {
    const db = getFirestore();

    const query = db.collection("orders").doc(`${id}`);

    query
      .get()
      .then((res) => {
        const order = res.data();
        setCustomer(order.buyer);
        setProducts(order.items);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoad(false));
  }, [id]);

  return (
    <div className="flex flex-col py-12">
      <h1 className="text-indigo-900 font-extrabold text-xl mb-2">
        Items in order # {id}
      </h1>

      {load ? (
        <Spinner />
      ) : (
        <>
          <h3 className="text-lg font-medium">
            Customer Name:{" "}
            <span className="text-semibold text-indigo-500">
              {customer.firstName} {customer.lastName}
            </span>
          </h3>
          <h3 className="text-lg font-medium">
            Customer Email:{" "}
            <span className="text-semibold text-indigo-500">
              {customer.emailAdress}
            </span>
          </h3>
          <h3 className="text-lg font-medium">
            Customer Phone:{" "}
            <span className="text-semibold text-indigo-500">
              {customer.phone}
            </span>
          </h3>
          <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Item
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Unitary Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <span>{product.quantity} x</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {product.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            $ {product.price}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ${" "}
                          {parseFloat(product.price * product.quantity).toFixed(
                            2
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Order;
