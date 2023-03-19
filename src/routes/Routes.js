import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "layouts/AuthLayout";
import AdminLayout from "layouts/AdminLayout";

import {
  AuthLayoutRoutes,
  AdminLayoutRoutes,
} from "routes";

const generateRoutes = (Layout, routes) => {
  return (
    <Route element={<Layout />}>
      {routes.map((item, index) => {
        const Component = item.component;  
        const Guard = item.guard || Fragment;


        if ( typeof Guard === 'symbol') {
          return <Route key={index} path={item.path} element={<Component />} />
        }

        return (
          <Route key={index} element={<Guard />}>
            <Route
              path={item.path}
              element={<Component />}
            />
          </Route>
        )
      })}
    </Route>
  )  
}

const RenderRoutes = () => {
  return (
    <Routes>
      {generateRoutes(AuthLayout, AuthLayoutRoutes)}
      {generateRoutes(AdminLayout, AdminLayoutRoutes)}
    </Routes>
  )
}

export default RenderRoutes;