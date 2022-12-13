import { useNavigate } from "react-router-dom";
import { NavbarModels } from "../../../product/data/navbar";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white shadow-navbar px-2 sm:px-4 fixed w-full z-20 top-0 left-0  py-2.5">
      <div className="flex flex-wrap items-center justify-between mx-8 ">
        {/* Logo start*/}
        <button className="flex items-center">
          <span className="self-center text-3xl text-baseGreen whitespace-nowrap  font-normal  font-LecklerliOne cursor-pointer">
            Sourpy
          </span>
        </button>
        {/* Logo end*/}

        {/* Section butons start*/}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            {NavbarModels.map(({ id, title, route, isActive }, index) => (
              <li key={id}>
                <a
                  href={route}
                  className="block text-base font-normal py-2 pl-3 pr-4 text-baseGray md:p-0"
                  aria-current="page"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          {/* Get Started start*/}
          <div className="flex">
            <button
              type="button"
              className="text-white hover:text-baseGreen text-center font-medium bg-baseGreen hover:bg-white transition-colors delay-75 px-4 py-1 mx-4 rounded-lg "
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
            <button
              type="button"
              className="text-md text-center font-medium  text-baseGreen hover:text-white  bg-white border-2 hover:bg-baseGreen border-baseGreen  transition-colors delay-75  focus:outline-none rounded-lg focus:ring-blue-300   px-4 py-1   mr-3 md:mr-0 "
              onClick={() => navigate("/register")}
            >
              Join
            </button>
          </div>
          {/* Get Started end*/}
        </div>
        {/* Section butons end*/}
      </div>
    </nav>
  );
};
