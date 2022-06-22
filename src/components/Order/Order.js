import { useState, useEffect } from 'react';
import Spinner from '../UI/Spinner';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../services/getFirebase';

const Order = () => {
  const [products, setProducts] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [load, setLoad] = useState(true);
  const params = useParams();
  const id = params.orderId !== undefined ? params.orderId : '';

  useEffect(() => {
    const db = getFirestore();

    const query = db.collection('orders').doc(`${id}`);

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

  const totalLong = products.reduce((acum, valor) => acum + valor.price, 0);
  const total = parseFloat(totalLong).toFixed(2);

  return (
    <div className="flex flex-col py-12">
      <h1 className="mb-2 text-xl font-extrabold text-indigo-900">
        Items in order # {id}
      </h1>

      {load ? (
        <Spinner />
      ) : (
        <>
          <h3 className="text-lg font-medium">
            Customer Name:{' '}
            <span className="text-indigo-500 text-semibold">
              {customer.firstName} {customer.lastName}
            </span>
          </h3>
          <h3 className="text-lg font-medium">
            Customer Email:{' '}
            <span className="text-indigo-500 text-semibold">
              {customer.emailAdress}
            </span>
          </h3>
          <h3 className="text-lg font-medium">
            Customer Phone:{' '}
            <span className="text-indigo-500 text-semibold">
              {customer.phone}
            </span>
          </h3>
          <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                      >
                        Item
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                      >
                        Unitary Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                      >
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <span>{product.quantity} x</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {product.title}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center whitespace-nowrap">
                          <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                            ${' '}
                            {parseFloat(
                              product.price / product.quantity
                            ).toFixed(2)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
                          $ {product.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-indigo-200">
                    <tr>
                      <td className="py-4 text-sm font-extrabold text-center text-gray-500 border-4 border-r-0 border-indigo-500 whitespace-nowrap">
                        TOTAL
                      </td>
                      <td className="py-4 text-sm font-extrabold text-center text-gray-500 border-4 border-l-0 border-r-0 border-indigo-500 whitespace-nowrap"></td>
                      <td className="py-4 text-sm font-extrabold text-center text-gray-500 border-4 border-l-0 border-r-0 border-indigo-500 whitespace-nowrap"></td>
                      <td className="py-4 text-sm font-extrabold text-center text-gray-500 border-4 border-l-0 border-indigo-500 whitespace-nowrap">
                        $ {total}
                      </td>
                    </tr>
                  </tfoot>
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
