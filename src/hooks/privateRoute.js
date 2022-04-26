import React from "react";
import { Navigate, Route, Routes, Router } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();

  return (
    <Router>
      <Routes>
        <Route
          {...rest}
          render={(props) =>
            token || localStorage.getItem("token") ? (
              <Component {...props} />
            ) : (
              <Navigate
                to={{
                  path: "/login",
                  state: {
                    from: props.location,
                  },
                }}
              />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default PrivateRoute;
