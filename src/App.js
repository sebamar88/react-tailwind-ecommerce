import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/UI/Layout";
import ItemListContainer from "./components/ItemListContainer";
import SingleProduct from "./components/Product/SingleProduct";
import Cart from "./components/Checkout/Cart";
import { CartContextProvider } from "./context/cartContext";
import { createContext } from "react";

export const ContextApp = createContext();

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Layout>
          <Route path="/" component={ItemListContainer} exact />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
        </Layout>
      </Router>
    </CartContextProvider>
  );
}

export default App;
