import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) =>
          authTokens ? (
            <Component {...props} />
          ) : (
            <Navigate
              to={{
                pathname: "/dashboard",
                state: { referer: props.location },
              }}
            />
          )
        }
      />
    </Routes>
  );
};

export default PrivateRoute;
