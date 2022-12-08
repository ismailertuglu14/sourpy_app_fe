import { useNavigate } from "react-router-dom";
import { NavbarModels } from "../../../product/data/navbar";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white px-2 sm:px-4  dark:bg-gray-900 fixed w-full z-20 top-0 left-0  border-b border-gray-200 dark:border-gray-600 py-2.5">
      <div className="flex flex-wrap items-center justify-between mx-24">
        {/* Logo start*/}
        <a className="flex items-center">
          <img
            src="./assets/icons/logo.png"
            className="h-6 mr-3 sm:h-9"
            alt="Sourpy"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">
            Sourpy
          </span>
        </a>
        {/* Logo end*/}

        {/* Section butons start*/}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {NavbarModels.map(({ id, title, route, isActive }, index) => (
              <li key={id}>
                <a
                  href={route}
                  className={`block py-2 pl-3 pr-4 ${
                    isActive === true ? " text-blue-700 " : " text-white "
                  }  md:p-0 `}
                  aria-current="page"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Section butons end*/}

        {/* Get Started start*/}
        <div className="flex ">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => navigate("/login")}
          >
            Get started
          </button>
        </div>
        {/* Get Started end*/}
      </div>
    </nav>
  );
};
