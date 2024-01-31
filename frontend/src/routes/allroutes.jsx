import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import Signup from "../components/signup";
import LoginPrivate from "./loginprivateroute";
import PrivateRoute from "./homePrivateroute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            {/* <Home /> */}
          </PrivateRoute>
        }
      >
        {" "}
      </Route>

      <Route
        path="/login"
        element={
          <LoginPrivate>
            <Login />
          </LoginPrivate>
        }
      ></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default AllRoutes;
