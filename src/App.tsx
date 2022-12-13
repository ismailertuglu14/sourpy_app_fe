import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Dashboard from "./view/dashboard";
import Landing from "./view/landing";
import NoPage from "./view/nopage";

const Login = React.lazy(() => import("./view/authentication/login/index"));
const Register = React.lazy(
  () => import("./view/authentication/register/index")
);
// TODO: Other pages will be define as a Lazy React Component

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
