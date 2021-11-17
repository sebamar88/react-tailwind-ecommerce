import React from "react";
import { useCartContext } from "../../context/cartContext";

const PriceTotal = () => {
  const { totalPrice } = useCartContext();
  return (
    <div className="col-12 text-center  bg-green-600 text-dark py-4 my-4 ">
      <h3 className="text-3xl text-white font-black">{`Total to pay :  $${totalPrice()}`}</h3>
    </div>
  );
};

export default PriceTotal;
