import { useState } from "react";
import * as styles from "./AddtoCart.module.css";

const AddtoCart = ({ stock, setCart, cart }) => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (e) => {
    if(e.target.value === '-'){
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }else{
      if (counter < stock) {
        setCounter(counter + 1);
      }
    }
  }

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
        <input
          type="button"
          value="-"
          className={styles.minus}
          onClick={(e) => {
            handleCounter(e);
          }}
        />
        <span className={styles.counter}>{counter}</span>
        <input
          type="button"
          value="+"
          className={styles.plus}
          onClick={(e) => {
            handleCounter(e);
          }}
        />
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
