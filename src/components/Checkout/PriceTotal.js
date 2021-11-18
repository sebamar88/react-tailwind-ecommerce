import React from "react";
import { useCartContext } from "../../context/cartContext";

const PriceTotal = () => {
  const { totalPrice } = useCartContext();
  return (
    <div className="col-12 text-right text-dark my-8 border-solid border-4 border-indigo-500">
      <h3 className="text-3xl inline-block  p-4 text-indigo-600 font-black">{`Total to pay :  $${totalPrice()}`}</h3>
    </div>
  );
};

export default PriceTotal;
