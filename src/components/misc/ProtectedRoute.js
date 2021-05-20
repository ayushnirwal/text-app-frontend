import { useSelector } from "react-redux";
import { Redirect } from "react-router";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  return loggedIn ? <Component {...rest} /> : <Redirect to="/login" />;
};

export default ProtectedRoute;
