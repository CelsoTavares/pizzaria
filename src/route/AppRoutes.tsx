import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import AnimateRoutes from "../components/AnimateRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <AnimateRoutes />
    </BrowserRouter>
  );
};

export default AppRoutes;
