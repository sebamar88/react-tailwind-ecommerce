import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";

const Layout = ({ children, cart }) => {
  return (
    <>
      <NavBar cart={cart} />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
