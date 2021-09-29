import "./App.css";
import Layout from "./components/UI/Layout";
import ItemListContainer from "./components/ItemListContainer";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);

  return (
    <Layout cart={cart}>
      <ItemListContainer cart={cart} setCart={setCart} title="Products" />
    </Layout>
  );
}

export default App;
