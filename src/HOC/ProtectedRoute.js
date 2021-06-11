import { Redirect } from "react-router";
import useUser from "../cutomHooks/useUser";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useUser();
  return user.loggedIn ? <Component {...rest} /> : <Redirect to="/login" />;
};

export default ProtectedRoute;
