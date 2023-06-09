import Router from "../src/routes";
import Providers from "./context";
import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./styles/globalStyles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <Providers>
    <GlobalStyles />
    <Router />
    <ToastContainer />
  </Providers>
);
