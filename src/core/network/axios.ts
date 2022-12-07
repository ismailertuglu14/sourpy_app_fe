import axios from "axios";
import { NetworkConstants } from "../constants/network_constants";

export default axios.create({
    baseURL: NetworkConstants.baseUrl,
    timeout: NetworkConstants.timeout
})