import { Link } from "react-router-dom";
import navigation from "../../../utils/navigation";

const Footer = () => {
  return (
    <footer className="bg-indigo-600">
      <div className="container mx-auto py-8">
        <h2 className="text-6xl font-bold mb-4 text-indigo-100">
          <span className="sr-only">Workflow</span>
          <img
            className="w-40 h-auto"
            src="https://furnistar-coder.vercel.app/images/logo-white.svg"
            alt=""
          />
        </h2>
        <ul className="text-x1 pl-4 text-white">
          {navigation.pages.map((page) => (
            <li key={page.name}>
              <Link
                to={page.href}
                className="-m-2 p-2 block font-medium text-white"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
