import { useState } from "react";
import * as styles from "./AddtoCart.module.css";

const AddtoCart = ({ stock, setCart, cart }) => {
  const [counter, setCounter] = useState(0);
  const handleMinus = (e) => {
    e.preventDefault();
    if (counter > 0) {
      const newCounter = counter - 1;
      setCounter(newCounter);
    }
  };

  const handlePlus = (e) => {
    e.preventDefault();
    if (counter < stock) {
      const newCounter = counter + 1;
      setCounter(newCounter);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (counter !== 0) {
      const newCartCounter = cart + counter;
      setCart(newCartCounter);
      setCounter(0);
    }
  };

  return (
    <>
      <div className={styles.addContainer}>
        <button
          className={styles.minus}
          onClick={(e) => {
            handleMinus(e);
          }}
        >
          {" "}
          -{" "}
        </button>
        <span className={styles.counter}>{counter}</span>
        <button
          className={styles.plus}
          onClick={(e) => {
            handlePlus(e);
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <button
        onClick={(e) => {
          handleAdd(e);
        }}
        className={styles.addToCart}
      >
        Add to Cart
      </button>
    </>
  );
};

export default AddtoCart;
