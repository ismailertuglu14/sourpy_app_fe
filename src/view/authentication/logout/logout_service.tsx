import Cookies from "js-cookie";
import { NavigateFunction } from "react-router-dom";
import { KeyEnums } from "../../../product/enums/KeyEnums";

export default function logout(navigate: NavigateFunction) {
  Cookies.remove(KeyEnums.SESSION_USER);
  console.log("silindi");
  navigate("/");
}
