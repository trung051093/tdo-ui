import { Navigate, useLocation } from "react-router-dom";
import { CookiesName, CookieServices } from '@tdo-ui/core';
import { ROUTES } from '@my-work/constants/routes'

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const location = useLocation();
  if (CookieServices.getCookie(CookiesName.ACCESS_TOKEN)) {
    return children;
  } else {
    return (
      <Navigate
        to={ROUTES.Authentication.LOGIN}
        state={{ from: location }}
        replace
      />
    );
  }
};

export default PrivateRoute;
