import { Outlet, Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorageUtils";
import { notifyAccessDenied } from "../utils/notificationsUtils";

const DataEntryRoutes = () => {
  const authority = getLocalStorage("authorities");
  return authority.includes("ADMIN") ? (
    <Outlet />
  ) : (
    (notifyAccessDenied(), (<Navigate to="/dashboard" />))
  );
};

export default DataEntryRoutes;
