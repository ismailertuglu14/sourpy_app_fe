import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { KeyEnums } from "../enums/KeyEnums";

type PrivateRouteProps = {
  component: JSX.Element;
};

function PrivateRoute({ component }: PrivateRouteProps) {
  const token = Cookies.get(KeyEnums.SESSION_USER);

  //FIXME: replace token instead of !token
  if (!token) {
    return component;
  }
  return <Navigate to="/" />;
}

export default PrivateRoute;
