import { useState } from "react";
import * as styles from "./AddtoCart.module.scss";

const AddtoCart = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(0);

  const handleAdd = (e) => {
    e.preventDefault();
    if (counter !== 0) {
      onAdd(counter);
      setCounter(0);
    }
  };

  return (
    <div>
      <div className={styles.addContainer}>
        <input
          type="button"
          value="-"
          className={styles.minus}
          onClick={(e) => {
            counter > 0 && setCounter(counter + Number(`${e.target.value}1`));
          }}
        />
        <span className={styles.counter}>{counter}</span>
        <input
          type="button"
          value="+"
          className={styles.plus}
          onClick={(e) => {
            counter < stock &&
              setCounter(counter + Number(`${e.target.value}1`));
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
    </div>
  );
};

export default AddtoCart;
