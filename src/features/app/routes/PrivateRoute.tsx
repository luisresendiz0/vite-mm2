import { Navigate } from "react-router-dom";
import { useStore } from "../../../store/store"
import Dashboard from "../components/Dashboard";

const PrivateRoute = () => {
  const isAuthenticaded = useStore(store => store.isAuthenticaded);

  return isAuthenticaded ? <Dashboard /> : <Navigate to="/signin" />;
}

export default PrivateRoute;