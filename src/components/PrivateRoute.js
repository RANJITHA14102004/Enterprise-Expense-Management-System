import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// PrivateRoute component accepts two props:
// 1. 'element' is the component to render if authenticated.
// 2. 'authenticated' is the boolean value indicating if the user is logged in.
const PrivateRoute = ({ element, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={authenticated ? element : <Navigate to="/" />} // Redirect to Login if not authenticated
    />
  );
};

export default PrivateRoute;
