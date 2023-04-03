import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLocalStorage } from "../utils/localStorageUtils";

const PrivateRoutes = () => {
  // const { isLogged } = useSelector((state) => state.userDuck);
  const isLogged = getLocalStorage("isLogged");
  console.log("PRIVATEROUTES isLogged:", isLogged);

  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
