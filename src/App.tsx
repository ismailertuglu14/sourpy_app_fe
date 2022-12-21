import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import PrivateRoute from "./product/routes/PrivateRoute";
import Landing from "./view/landing";

const Login = lazy(() => import("./view/authentication/login/index"));
const Register = lazy(() => import("./view/authentication/register/index"));
const Dashboard = lazy(() => import("./view/dashboard/Dashboard"));
const NoPage = lazy(() => import("./view/nopage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={<Dashboard />} />}
        />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
